// src/api/auth.js

// Register a new user
export async function register(userData) {
  try {
    const response = await fetch("http://localhost:8081/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // include cookies/session
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      let errorMessage = "Registration failed";
      try {
        const error = await response.json();
        errorMessage = error.message || errorMessage;
      } catch {}
      throw new Error(errorMessage);
    }

    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

// Log in an existing user
export async function login({ username, password }) {
  try {
    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    const response = await fetch("http://localhost:8081/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      credentials: "include",
      body: formData.toString(),
    });

    if (!response.ok) {
      let errorMessage = "Invalid credentials";
      try {
        const error = await response.json();
        errorMessage = error.message || errorMessage;
      } catch {}
      throw new Error(errorMessage);
    }

    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

// Fetch the currently logged-in user's details
export async function fetchUser() {
  try {
    const response = await fetch("http://localhost:8081/users/userDetails", {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      let errorMessage = "Not authenticated";
      try {
        const error = await response.json();
        errorMessage = error.message || errorMessage;
      } catch {}
      throw new Error(errorMessage);
    }

    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

// Logout the current user
export async function logout() {
  try {
    const response = await fetch("http://localhost:8081/logout", {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      let errorMessage = "Logout failed";
      try {
        const error = await response.json();
        errorMessage = error.message || errorMessage;
      } catch {}
      throw new Error(errorMessage);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
