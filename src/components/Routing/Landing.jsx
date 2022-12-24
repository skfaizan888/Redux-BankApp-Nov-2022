import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ForgetPassword } from '../ForgetPassword';
import { Login } from '../Login';
import { Registartion } from '../Registartion';

const Landing = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/registartion' element={<Registartion/>} />
                <Route path='/forgetpassword' element={<ForgetPassword/>} />
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Landing;