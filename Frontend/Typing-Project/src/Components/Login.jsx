import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 text-white">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">
          Welcome Back
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            onClick={() => navigate("/cardsPage")}

            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded font-semibold"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400 mb-2">Don’t have an account?</p>
          <Link to="/signup" className="text-blue-400 hover:underline text-sm">
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
