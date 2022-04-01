import React from "react";
import { useNavigate } from "react-router";

import loginImg from '../../assest/login.svg'

export const Login = () => {
    let navigate = useNavigate()

    const Submit = (event) => {

        navigate('/dashboard')

    }
    return (
        <>
            <div className="row" style={{ width: '70%', height: '70vh', margin: 'auto', backgroundColor: 'white', boxShadow: '5px 5px 30px #6c6a6a', overflow: 'hidden', borderRadius: '0% 0% 20% 0% ' }}>
                <div className="col-lg-5" style={{ backgroundImage: `url(` + loginImg + `)`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>

                </div>

                <div className="col-lg-7 d-flex align-self-center text-center " >

                    <div className=" w-100"  >
                        <h1 style={{ fontSize: '2.5rem', fontStyle: 'bold', fontWeight: '700' }}>Login </h1>

                        <div class="form-group " >
                            <input type="email" class="form-control" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Enter Password" />
                        </div>

                        <button type="submit" class="btn btn-primary" onClick={(event) => Submit(event)}>Login</button>
                    </div>

                </div>

            </div>
            <br />
        </>
    )
}