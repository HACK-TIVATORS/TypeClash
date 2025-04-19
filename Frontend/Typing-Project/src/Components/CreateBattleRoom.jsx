import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBattleRoom() {
  const navigate = useNavigate();

  // Dummy Room ID
  const roomId = "ROOM-123456";

  // Timer setup (3 minutes)
  const [timeLeft, setTimeLeft] = useState(30); // seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/battlePage"); // Navigate back automatically
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(roomId);
    alert("Room ID copied!");
  };

  return (
    <div className="min-h-screen bg-[url('/typing-battle.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white px-4">
      <div className="bg-black/70 backdrop-blur p-10 rounded-2xl shadow-2xl max-w-xl w-full text-center space-y-6">

        <h2 className="text-3xl font-bold text-purple-400">Battle Room Created</h2>

        <div className="text-lg">
          Share this Room ID with your friend to join the typing battle.
        </div>

        {/* Room ID Display */}
        <div className="flex items-center justify-between bg-purple-800 px-4 py-3 rounded-lg">
          <span className="text-xl font-mono tracking-wider">{roomId}</span>
          <button
            onClick={handleCopy}
            className="ml-4 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm transition"
          >
            Copy
          </button>
        </div>

        {/* Countdown Timer */}
        <div className="w-full">
          <div className="text-sm text-gray-300 mb-1">
            Waiting for opponent... ({formatTime(timeLeft)})
          </div>
          <div className="w-full h-2 bg-purple-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-500 transition-all duration-1000"
              style={{ width: `${(timeLeft / 180) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/battlePage")}
          className="mt-6 bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded transition"
        >
          Back to Create Battle
        </button>
      </div>
    </div>
  );
}
