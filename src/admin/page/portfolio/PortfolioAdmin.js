import { Link } from 'react-router-dom';
import { BsPencilSquare, BsFillTrashFill, BsFillPlusCircleFill } from "react-icons/bs";
import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PORTFOLIO } from "../../../GraphQl/Queries";
import { DELETE_PORTFOLIO } from "../../../GraphQl/Mutation";
import Swal from 'sweetalert2'
import NavAdmin from '../../component/NavAdmin'
import Sidebar from "../../component/Sidebar"
import "./portfolio.css"
import Loading from "../../../component/Loading";
 
const PortfolioAdmin = () => {
    const { data, loading: getLoading} = useQuery(GET_PORTFOLIO);
    const [deletePort, { loading: deleteExpe }] = useMutation(DELETE_PORTFOLIO , {
        refetchQueries: [GET_PORTFOLIO],
      });

      if ( getLoading ) {
        return <Loading/>;
      }
    
    const HandleDelete = (idx) =>{
        return(
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    deletePort({
                        variables: {
                          id: idx,
                        },
                      });

                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })
        )
        
    }



    return (
        <div>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <NavAdmin />
                    </div>
                    <div class="ml-4">
                        <h1 class="h3 mb-0 text-gray-800">Portfolio</h1>
                    </div>
                    <div class="col-lg-12 mb-4">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card">
                                    <div class="card-body">

                                        <div class="col-sm-12 p-2">

                                            <Link to="/add-portofolio">
                                                <button type="button" class="btn btn-success mb-3"><BsFillPlusCircleFill /></button>
                                            </Link>
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">No</th>
                                                        <th scope="col">Keterangan</th>
                                                        <th scope="col">Image</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {data?.portfolio.map((port, i) => (
                                                    <tr>
                                                        <th scope="row">{i+1}</th>
                                                        <td>{port.name}</td>
                                                        <td>
                                                            <img className='imagePort' src={port.image}/>
                                                        </td>
                                                        <td>
                                                            <button type="button" class="btn btn-danger" onClick={() => HandleDelete(port.id)}><BsFillTrashFill /></button>
                                                            <Link to="/edit-portofolio">
                                                                <button type="button" class="btn btn-warning ml-2"><BsPencilSquare /></button>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))}


                                                </tbody>
                                            </table>



                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <script src="./assets/js/sb-admin-2.min.js"></script>
        </div >
    )
}

export default PortfolioAdmin