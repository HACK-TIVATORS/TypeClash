import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import CardsPage from "./Components/CardsPage";
import BattlePageCards from "./Components/BattlePageCards";
import TypingBattleResult from "./Components/TypingBattleResult";
import TypingBattle from "./Components/TypingBattle";
import CreateBattleRoom from "./Components/CreateBattleRoom";
import JoinBattleRoom from "./Components/JoinBattleRoom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cardsPage" element={<CardsPage />} />
        <Route path="/battlePage" element={<BattlePageCards />} />
        <Route path="/result" element={<TypingBattleResult />} />
<<<<<<< HEAD
        <Route path="/battle-room" element={<CreateBattleRoom />} />
        <Route path="/join-battle" element={<JoinBattleRoom />} />
        {/* Typing Battle Component */}

=======
>>>>>>> 264283d28031ed3e4e1b2c6a0061a4935c901e39
        <Route path="/typingbattle" element={<TypingBattle />} />
      </Routes>
    </Router>
  );
}

export default App;
