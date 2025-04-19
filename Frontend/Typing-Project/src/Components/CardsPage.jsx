// TypingModeCards.js
import React from "react";

export default function TypingModeCards() {
  return (
    <div className="min-h-screen bg-[url('/typing-battle.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-12">
      <div className="bg-black/70 backdrop-blur-sm p-12 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-12 max-w-6xl w-full">

        {/* Typing Practice Card */}
        <div className="flex-1 bg-purple-700 bg-opacity-80 hover:bg-purple-800 transition duration-300 rounded-2xl p-10 shadow-lg border border-purple-300 cursor-pointer hover:scale-105 transform">
          <h3 className="text-3xl font-extrabold text-white mb-4">Typing Practice</h3>
          <p className="text-gray-200 text-base leading-relaxed">
            Improve your accuracy and speed with focused typing sessions. Perfect for beginners and pros who want to stay sharp. Track your WPM, accuracy, and progress over time.
          </p>
        </div>

        {/* Typing Battle Card */}
        <div className="flex-1 bg-purple-700 bg-opacity-80 hover:bg-purple-800 transition duration-300 rounded-2xl p-10 shadow-lg border border-purple-300 cursor-pointer hover:scale-105 transform">
          <h3 className="text-3xl font-extrabold text-white mb-4">Typing Battle</h3>
          <p className="text-gray-200 text-base leading-relaxed">
            Face off with other typists in real-time battles. Test your limits under pressure and rise up the leaderboard. Fast fingers win — are you ready to clash?
          </p>
        </div>

      </div>
    </div>
  );
}
