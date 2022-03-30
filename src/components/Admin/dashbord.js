import React, { useState } from "react";
import { useNavigate } from "react-router";


export const Dashbord = () => {
    let navigate = useNavigate()

    const [option, setOption] = useState([
        {
            pathname: 'add',
            name: 'Add New User',
            dec: 'Add new user in any section',
            icon: 'fa fa-plus-circle fa-lg'
        }, {
            pathname: 'search',
            name: 'Searching',
            dec: 'Search , delete and update users',
            icon: 'fa fa-search-plus fa-lg'

        }, {
            pathname: 'listing',
            name: 'Listing',
            dec: 'Listing all users with description',
            icon: 'fa fa-list-alt fa-lg'

        }, {
            pathname: 'setting',
            name: 'Setting',
            dec: 'Customize and manage the website',
            icon: 'fa fa-cogs fa-lg'

        }
    ])
    const goTo = (event, path) => {
        navigate('/dashbord/' + path)

    }

    return (
        <>
            <div className="container " style={{ height: '80vh', backgroundColor: '' }}>
                <div className="row text-center "  >
                    {
                        option.map((i) => {
                            return (
                                <div onClick={(event) => goTo(event, i.pathname)} className=" col-lg-4 col-md-6 col-sm-6 col-xs-12" style={{ cursor: 'pointer', padding: '15px', margin: '0', backgroundColor: '', borderRadius: '10px' }}>
                                    <div>

                                        <h6 style={{ fontSize: '1.25rem', fontWeight: '550' }}> {i.name}</h6>

                                        <div style={{ display: 'inline-flex', position: 'relative', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', backgroundColor: '#00ab55', color: 'white', width: '50px', height: '50px' }}>
                                            <i className={i.icon} aria-hidden="true"></i>
                                        </div>

                                        <p className="text-muted">{i.dec}</p>
                                    </div>


                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}