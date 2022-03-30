import React from 'react'
import '../Css/footerStyle.css'

export const Footer = () => {
    return (
        <>
        <br></br>
            <section className="link" style={{backgroundColor:'white'}}>
                <div className="logos">
                    <a href="#"><i className="fab fa-facebook-square fa-2x logo"></i></a>
                    <a href="#"><i className="fab fa-instagram fa-2x logo"></i></a>
                    <a href="#"><i className="fab fa-twitter fa-2x logo"></i></a>
                    <a href="#"><i className="fab fa-youtube fa-2x logo"></i></a>
                </div>
                <hr/>
                <div className="sub-links">
                <div className="row align-items-center justify-content-center">
                        <li  className='col-lg-4 col-sm-12'><a href="#">Audio and Subtitles</a></li>
                        <li  className='col-lg-4 col-sm-12'><a href="#">Audio Description</a></li>
                        <li  className='col-lg-4 col-sm-12'><a href="#">Help Center</a></li>
                        <li  className='col-lg-4 col-sm-12'><a href="#">Gift Cards</a></li>
                        <li  className='col-lg-4 col-sm-12'><a href="#">Media Center</a></li>
                        <li  className='col-lg-4 col-sm-12'><a href="#">Investor Relations</a></li>
                        <li  className='col-lg-4 col-sm-12'><a href="#">Jobs</a></li>
                        <li  className='col-lg-4 col-sm-12'><a href="#">Terms of Use</a></li>
                        <li  className='col-lg-4 col-sm-12'><a href="#">Privacy</a></li>
                        <li  className='col-lg-4 col-sm-12'><a href="#">Legal Notices</a></li>
                        <li  className='col-lg-4 col-sm-12'><a href="#">Corporate Information</a></li>
                        <li  className='col-lg-4 col-sm-12'><a href="#">Contact Us</a></li>

                    </div>
                </div>
            </section>

        </>

    )
}