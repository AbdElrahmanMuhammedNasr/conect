import React, { useEffect, useState } from 'react'
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import {  Navigate, Route, Routes } from 'react-router-dom';
import { Main } from './components/User/userPage1/main';
import { UserDetails } from './components/User/userPage2/userDetail';
import { Login } from './components/Admin/login';
import { Dashbord } from './components/Admin/dashbord';
import { Listing } from './components/Admin/listing';
import { Add } from './components/Admin/add';
import { Search } from './components/Admin/search';
import { Setting } from './components/Admin/setting';
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
                    <Route path='/dashboard' element={<Dashbord/>} />
                    <Route path='/dashboard/listing' element={<Listing/>} />
                    <Route path='/dashboard/add' element={<Add/>} />
                    <Route path='/dashboard/search' element={<Search/>} />
                    <Route path='/dashboard/setting' element={<Setting/>} />
                    
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
