import React, { useEffect, useState } from 'react'
import { Navbar } from './components/navbar';
import { Main } from './components/userPage1/main';
import { UserDetails } from './components/userPage2/userDetail';
import { Footer } from './components/footer';
import {  Navigate, Route, Routes } from 'react-router-dom';
  
  const App = () => {
    return (
        <div className='' style={{ height: '100%' }}>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Navigate to="/main" replace />} />
                    <Route path="/main"  element={<Main/>} />
                    <Route path="/details/:type"  element={<UserDetails/>} />
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
