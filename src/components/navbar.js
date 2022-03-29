import React from 'react'
import logo from '../assest/logo.png'
import { NavLink } from "react-router-dom";
export const Navbar = ()=>{
    return (
    <div>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to={`/main`} className="navbar-brand" >
                <img src={logo}  width="30" height="24" className="d-inline-block align-text-top" />
                <span className={{margin:'0px 25px'}} style={{color:'#00ab55', fontWeight:'bold'}}> Conect </span>
                
                </NavLink>
             </div>
        </nav>
        <br></br>
    </div>
    )

}
