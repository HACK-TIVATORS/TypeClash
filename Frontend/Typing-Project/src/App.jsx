import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import CardsPage from "./Components/CardsPage";
import BattlePageCards from "./Components/BattlePageCards";
import TypingBattle from "./Components/TypingBattle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cardsPage" element={<CardsPage />} />
        <Route path="/battlePage" element={<BattlePageCards />} />
        <Route path="/typingbattle" element={<TypingBattle />} />
      </Routes>
    </Router>
  );
}

export default App;
