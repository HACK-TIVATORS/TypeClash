// src/pages/JoinBattleRoom.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JoinBattleRoom() {
  const [timeLeft, setTimeLeft] = useState(30);
  const [isReady, setIsReady] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0 && !isReady) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timeLeft === 0) {
      setTimerExpired(true);
    }
  }, [timeLeft, isReady]);

  const handleReadyClick = () => {
    setIsReady(true);
    // Simulate navigation after short delay to mimic opponent ready
    setTimeout(() => {
      navigate("/typingbattle"); // Replace with your actual route
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[url('/typing-battle.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center p-6">
      <div className="bg-black/70 backdrop-blur-sm rounded-xl p-10 max-w-xl w-full text-center shadow-lg text-white">
        <h1 className="text-3xl font-bold text-purple-400 mb-6">
          Get Ready for Battle!
        </h1>

        {/* Room ID (Dummy) */}
        <p className="mb-4 text-lg">
          Room ID: <span className="font-semibold text-purple-300">ABCD1234</span>
        </p>

        {/* Timer Bar */}
        {!isReady && !timerExpired && (
          <div className="w-full bg-gray-700 rounded-full h-4 mb-6">
            <div
              className="bg-purple-500 h-4 rounded-full transition-all duration-1000"
              style={{ width: `${(timeLeft / 30) * 100}%` }}
            ></div>
          </div>
        )}

        <p className="mb-6 text-gray-200">
          {timerExpired
            ? "Time's up! Opponent didn't respond."
            : isReady
            ? "You're ready! Waiting for opponent..."
            : `You have ${timeLeft} seconds to get ready.`}
        </p>

        {/* Ready Button */}
        <button
          onClick={handleReadyClick}
          disabled={isReady || timerExpired}
          className={`px-6 py-3 rounded-lg text-lg font-semibold transition ${
            isReady || timerExpired
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          I'm Ready
        </button>
      </div>
    </div>
  );
}
