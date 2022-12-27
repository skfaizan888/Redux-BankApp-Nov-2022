import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForgetPassword } from "../ForgetPassword";
import Home from "../Home";
import { Login } from "../Login";
import { Registartion } from "../Registartion";

const Landing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/registartion" element={<Registartion />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Landing;
