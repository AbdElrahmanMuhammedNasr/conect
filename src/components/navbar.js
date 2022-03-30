import React, { useState } from 'react'
import logo from '../assest/logo.png'
import { NavLink } from "react-router-dom";
export const Navbar = () => {

    const [links, setLinks] = useState([
        { name: 'Home', path: '/dashboard' },
        { name: 'Add', path: '/dashboard/add' },
        { name: 'Searching', path: '/dashboard/search' },
        { name: 'Listing', path: '/dashboard/list' },
        { name: 'Setting', path: '/dashboard/setting' },

    ])
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink to={`/main`} className="navbar-brand" >
                        <img src={logo} width="30" height="24" className="d-inline-block align-text-top" />
                        <span className={{ margin: '0px 25px' }} style={{ color: '#00ab55', fontWeight: 'bold' }}> Conect </span>
                    </NavLink>

                    <div style={{ color: '#00ab55', fontWeight: 'bold' }}>

                        {
                            links.map((l, i) => {
                                return (
                                    <NavLink to={l.path} className="navbar-brand" >
                                        <span style={{ fontSize: '1rem' }}>
                                            <span style={{ color: '#00ab55' }}> {l.name} </span>
                                        </span>
                                    </NavLink>
                                )

                            })
                        }


                    </div>


                    <NavLink to={`/admin`} className="navbar-brand" >
                        <span style={{ fontSize: '1rem' }}>
                            <i class="fa fa-user-circle " aria-hidden="true"> </i>
                            <span style={{ color: '#00ab55' }}> Admin  Login </span>
                        </span>
                    </NavLink>

                </div>
            </nav>
            <br></br>
        </div>
    )

}
