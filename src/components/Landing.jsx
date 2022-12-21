import React from "react";
import { Cards } from "./Cards";
import { Loans } from "./Loans";
import { AccountSummary } from "./AccountSummary";
import { Home } from "./Home";
import { Nav } from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Landing = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/cards" element={<Cards />} />
          <Route path="/accsum" element={<AccountSummary />} />
          <Route path="/loan" element={<Loans />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
