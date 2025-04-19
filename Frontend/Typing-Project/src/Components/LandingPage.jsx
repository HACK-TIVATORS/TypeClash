import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[url('/typing-battle.jpg')] bg-cover bg-center bg-no-repeat relative flex font-sans">
      {/* Simple dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Sidebar Navbar */}
      <nav className="relative z-10 w-1/5 bg-black/70 p-6 flex flex-col justify-between">
        <h1 className="text-4xl font-extrabold text-purple-300">TypeClash</h1>

        <div></div>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-purple-500 hover:bg-purple-600 text-purple-100 font-bold px-4 py-2 rounded text-center transition duration-300"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="bg-purple-500 hover:bg-purple-600 text-purple-100 font-bold px-4 py-2 rounded text-center transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-row items-center px-16 py-12">
        <div className="max-w-xl">
          <h2 className="text-5xl font-extrabold mb-6 text-purple-300">
            Prove Your Speed. Join The Typing Battle.
          </h2>

          <p className="text-lg text-purple-200 font-semibold mb-6">
            Type faster than your opponents, sharpen your skills, and claim
            victory in the ultimate keyboard showdown.
          </p>
        </div>

        <div className="w-1/2 flex justify-center items-center">
          {/* Empty placeholder area for future content */}
          <div className="h-32 w-3/4 bg-purple-500/20 rounded-xl border border-purple-300/30"></div>
        </div>
      </div>
    </div>
  );
}
