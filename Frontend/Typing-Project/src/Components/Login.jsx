import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext/AuthContex";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [creds, setCreds] = useState({ username: "", password: "" });

  const handleChange = e =>
    setCreds(c => ({ ...c, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(creds);
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 text-white">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">
          Welcome Back
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1">Username</label>
            <input
              name="username"
              value={creds.username}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={creds.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-700 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
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
