import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BattleOptionsPage() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");

  const handleJoinBattle = () => {
    if (roomId.trim() !== "") {
      navigate("/join-battle"); // You can also pass roomId via state or params if needed
    } else {
      alert("Please enter a Room ID to join a battle.");
    }
  };

  return (
    <div className="min-h-screen bg-[url('/typing-battle.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center p-8 text-white">
      <div className="bg-black/70 p-10 rounded-xl shadow-xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Create Battle Card */}
        <div className="bg-purple-700/80 p-6 rounded-2xl flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300">
          <h2 className="text-3xl font-bold mb-4">Create a Battle</h2>
          <p className="text-lg mb-6">Start a new typing battle and challenge your friends or random players.</p>
          <button
            onClick={() => navigate("/battle-room")}
            className="bg-white text-purple-700 font-semibold px-5 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Create Battle
          </button>
        </div>

        {/* Join Battle Card */}
        <div className="bg-purple-700/80 p-6 rounded-2xl flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300">
          <h2 className="text-3xl font-bold mb-4">Join a Battle</h2>
          <p className="text-lg mb-4">Paste the Room ID below to join an existing typing battle.</p>
          <input
            type="text"
            placeholder="Enter Room ID"
            required
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="mb-4 p-3 rounded w-full text-black focus:outline-none"
          />
          <button
            onClick={handleJoinBattle}
            className="bg-white text-purple-700 font-semibold px-5 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Join Battle
          </button>
        </div>
      </div>
    </div>
  );
}
