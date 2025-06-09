"use client";
import React, { useState } from "react";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Example: Replace with your actual sign-up logic
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      // Simulate API call
      // const response = await fetch("/api/sign-up", { ... });
      // Handle response here
      alert("Signed up!");
    } catch (err) {
      setError("Sign up failed. Please try again." + " " + (err instanceof Error ? err.message : ""));
    }
  };

  const handleGoogleSignUp = () => {
    // Replace with your actual Google OAuth logic
    window.location.href = "/api/auth/google";
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{ width: "100%", padding: 8, marginTop: 4 }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: 8, marginTop: 4 }}
            />
          </label>
        </div>
        {error && <div style={{ color: "red", marginBottom: 16 }}>{error}</div>}
        <button type="submit" style={{ width: "100%", padding: 10, marginBottom: 12 }}>Sign Up</button>
      </form>
      <button
        onClick={handleGoogleSignUp}
        style={{
          width: "100%",
          padding: 10,
          background: "#4285F4",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Sign Up with Google
      </button>
    </div>
  );
};

export default SignUpPage;