import { useState, useEffect } from "react";
// pages 
import Home from "./pages/Home.js";
import CompanyDetail from "./pages/CompanyDetail";
// react router 
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/company/:id' element={<CompanyDetail />} exact />
        </Routes>
    );
}

export default App;
