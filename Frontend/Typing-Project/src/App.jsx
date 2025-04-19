import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import CardsPage from "./Components/CardsPage";

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/cardsPage" element={<CardsPage />} />
        
      </Routes>
    </Router>
    
  );
}

export default App;
