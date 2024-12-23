import React, { useState } from "react";

import { useAuthState, useAuthDispatch } from "./AuthContext";

const Login: React.FC = React.memo(() => {
  const dispatch = useAuthDispatch();
  const { loading, error } = useAuthState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    dispatch({ type: "LOGIN_REQUEST" });
    try {
      const user = await new Promise<{ id: string; name: string }>((resolve, reject) => {
        setTimeout(() => {
          if (email === "test@example.com" && password === "password123") {
            resolve({ id: "1", name: "John Smith" });
          } else {
            reject(new Error("Invalid credentials"));
          }
        }, 1000);
      });

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { id: user.id, name: user.name, email },
      });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: (error as Error).message });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
});

export default Login;
