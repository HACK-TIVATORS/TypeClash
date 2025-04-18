import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const fullText = "Prove Your Speed. Join The Typing Battle.";

  return (
    <div className="min-h-screen flex text-white bg-gradient-to-br from-purple-800 to-indigo-900">
      {/* Sidebar Navbar */}
      <nav className="w-1/5 bg-black/70 p-6 flex flex-col justify-between">
        <h1 className="text-3xl font-bold text-purple-400">TypeClash</h1>
        <div></div>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/login")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-center transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-center transition"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-row items-center justify-between px-16 py-12 bg-black/50">
        <div className="max-w-xl">
          <h2 className="text-5xl font-extrabold mb-6 text-white">
            {fullText}
          </h2>
          <p className="text-lg text-gray-200 mb-6">
            Type faster than your opponents, sharpen your skills, and claim
            victory in the ultimate keyboard showdown.
          </p>
        </div>

        <div className="w-1/2"></div>
      </div>
    </div>
  );
}
