import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TypingBattleResult() {
  const navigate = useNavigate();

  // 🔹 Dummy states for testing
  const [result] = useState("win"); // Change to "lose" to test loss screen
  const [wpm] = useState(72); // Dummy Words Per Minute
  const [accuracy] = useState(94); // Dummy Accuracy %

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/typing-battle.jpg')] bg-cover bg-center text-white px-6">
      <div className="bg-black/70 p-12 rounded-2xl shadow-2xl text-center max-w-xl w-full">
        <h2 className="text-4xl font-extrabold mb-4">
          {result === "win" ? "🎉 You Won the Battle!" : "💥 You Lost the Battle"}
        </h2>

        <div className="text-lg text-gray-200 mb-8">
          {result === "win"
            ? "Congratulations! Your typing skills dominated the competition."
            : "Don't give up! Keep practicing and come back stronger."}
        </div>

        {/* Performance Stats */}
        <div className="bg-black/50 p-6 rounded-lg mb-8 border border-purple-400">
          <p className="text-xl font-semibold text-purple-300 mb-2">Performance Summary</p>
          <p className="text-lg">
            <span className="font-bold text-white">WPM:</span> {wpm} words/min
          </p>
          <p className="text-lg">
            <span className="font-bold text-white">Accuracy:</span> {accuracy}%
          </p>
        </div>

        <button
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 text-lg rounded transition"
          onClick={() => navigate("/typing-battle")}
        >
          Restart Battle
        </button>
      </div>
    </div>
  );
}
