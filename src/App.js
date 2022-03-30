import React, { useEffect, useState } from 'react'
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import {  Navigate, Route, Routes } from 'react-router-dom';
import { Main } from './components/User/userPage1/main';
import { UserDetails } from './components/User/userPage2/userDetail';
import { Login } from './components/Admin/login';
import { Dashbord } from './components/Admin/dashbord';
import { Listing } from './components/Admin/listing';
// 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
  const App = () => {
    return (
        <div className='' style={{ height: '100%' }}>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Navigate to="/main" replace />} />
                    <Route path="/main"  element={<Main/>} />
                    <Route path="/details/:type"  element={<UserDetails/>} />
    
                    {/*  admin */}
                    <Route path='/admin' element={<Login/>} />
                    <Route path='/dashbord' element={<Dashbord/>} />
                    <Route path='/dashbord/listing' element={<Listing/>} />
                    
                    <Route path="*"
                            element={
                                <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                                </main>
                            }
                            />


                </Routes>
             {/* <Main /> */}
             {/* <UserDetails /> */}
            <Footer />

        </div>
    );
}

export default App;
