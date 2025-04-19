import React from "react";
import { useNavigate } from "react-router-dom";

export default function TypingModeCards() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[url('/typing-battle.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-12">
      <div className="bg-black/70 backdrop-blur-sm p-12 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-12 max-w-6xl w-full">

        {/* Typing Practice Card */}
        <div className="flex-1 bg-purple-700 bg-opacity-80 hover:bg-purple-800 transition duration-300 rounded-2xl p-10 shadow-lg border border-purple-300 transform hover:scale-105">
          <h3 className="text-3xl font-extrabold text-white mb-4">Typing Practice</h3>
          <p className="text-gray-200 text-base leading-relaxed mb-6">
            Improve your accuracy and speed with focused typing sessions. Perfect for beginners and pros who want to stay sharp.
          </p>
          <button onClick={() => navigate("/battlePage")} className="bg-black text-white px-5 py-2 rounded hover:bg-white hover:text-black transition">
            Go to Practice
          </button>
        </div>

        {/* Typing Battle Card */}
        <div className="flex-1 bg-purple-700 bg-opacity-80 hover:bg-purple-800 transition duration-300 rounded-2xl p-10 shadow-lg border border-purple-300 transform hover:scale-105">
          <h3 className="text-3xl font-extrabold text-white mb-4">Typing Battle</h3>
          <p className="text-gray-200 text-base leading-relaxed mb-6">
            Face off with other typists in real-time battles. Test your limits under pressure and rise up the leaderboard with your skill.
          </p>
          <button onClick={() => navigate("/battlePage")} className="bg-black text-white px-5 py-2 rounded hover:bg-white hover:text-black transition">
            Go to Battle
          </button>
        </div>

      </div>
    </div>
  );
}
