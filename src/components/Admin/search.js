import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useSearchParams } from 'react-router-dom';


export const Search = () => {
    let navigate = useNavigate()
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams({});


    const [users, setUser] = useState([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1])

    const getUserDetails = (event, i) => {
         navigate(location.pathname + '?user=' + i)

    }
    const deleteUser = (event, i) => {
        console.log('k')

    }
    return (
        <div style={{ width: '95%', margin: 'auto', padding: '20px 0px 0px 0px', backgroundColor: 'white', boxShadow: '5px 5px 30px #6c6a6a', overflow: 'hidden' }} >

            <div className="container" style={{ backgroundColor: '' }}>
                <div class="row ">
                    <div class="col-auto w-75">
                        <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe" />
                    </div>
                    <div class="col-auto ">
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-2">Search</button>
                    </div>
                </div>
            </div>

            {/*  end */}
            <div className="row" style={{ height: '80vh' }}>
                <div className="col-8 p-5" style={{ backgroundColor: "#efefef" }}>
                    <div style={{ cursor: 'pointer' }} onClick={(event) => deleteUser(event)}>
                        <i className="fa fa-trash text-danger" ></i>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-12 custom-file" style={{ margin: '20px 0px' }}>
                            <input type="file" class="custom-file-input" id="validatedCustomFile" required />
                            <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                        </div>


                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Password</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>.dfd.</option>
                                <option>.dfd.</option>
                                <option>.dfd.</option>
                                <option>.dfd.</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" id="inputZip" />
                        </div>
                    </div>

                    <button type="submit" class="btn btn-warning  btn-block">Update</button>


                </div>


                <div className="col-4" style={{ backgroundColor: "#ebefea", overflow: 'scroll', height: '100%' }}>
                    {
                        users.map((u, i) => {
                            return (
                                <div onClick={(event) => getUserDetails(event, i)} style={{ cursor: 'pointer', margin: '10px 0px' }}>
                                    <div class="card text-white bg-success ">
                                        <div class="card-body">
                                            <h5 class="card-title">Special title treatment</h5>
                                            <p class="card-text">With supporting text below as a natural lead-in to </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </div>
    )
}