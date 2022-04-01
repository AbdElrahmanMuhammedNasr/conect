import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useSearchParams } from 'react-router-dom';
export const Setting = () => {
    let navigate = useNavigate()
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams({});

    function switchAction() {
        switch (searchParams.get('action')) {
            case 'create': return (create()); break;
            case 'password': return (password()); break;
        }

    }

  

    function create() {
        return (
            <>
                create
            </>
        )
    }

    function password() {
        return (
            <>
                password
            </>
        )
    }

    return (
        <div style={{ width: '98%', margin: 'auto' }}>
            <div className="row" style={{ height: '100vh' }}>
                <div className="col-2" style={{ backgroundColor: 'white' }}>


                    <div style={{ margin: '10px 0px' }}>
                        <button type="button" class="btn  btn-lg btn-block" onClick={(event) => { navigate(location.pathname + '?action=' + 'create') }}>Create Admin </button>
                        <button type="button" class="btn  btn-lg btn-block" onClick={(event) => { navigate(location.pathname + '?action=' + 'password') }}>Change password</button>
                    </div>



                </div>
                <div className="col-10" style={{ backgroundColor: 'green' }}>

                    {
                        switchAction()

                    }


                </div>

            </div>

        </div>
    )
}