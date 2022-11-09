import React from 'react'
import NavAdmin from '../../component/NavAdmin'
import Sidebar from "../../component/Sidebar"


const AddSkill = () => {
  return (
    <div>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <NavAdmin />
                    </div>
                    <div class="ml-4">
                        <h1 class="h3 mb-0 text-gray-800">Add Skill</h1>
                    </div>
                    <div class="col-lg-12 mb-4">
                        <div class="col-sm-12 p-2">
                        
                            <div class="card p-4">

                                <div class="mb-3">
                                    <label class="form-label">Title</label>
                                    <input type="text" class="form-control"  />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">First Year</label>
                                    <input type="text" class="form-control"  />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Last Year</label>
                                    <input type="text" class="form-control"  />
                                </div>

                                
                               
                                <button class="btn btn-primary" >Simpan</button>
                            </div>
                           
                        </div>

                    </div>
                </div>
            </div>

            <script src="./assets/js/sb-admin-2.min.js"></script>
        </div>
  )
}

export default AddSkill