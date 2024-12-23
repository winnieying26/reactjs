import React from "react";
import { AuthProvider } from "./AuthContext";
import Login from "./Login";

const Index: React.FC = () => {
  return (
    <AuthProvider>
      <div>
        <h1>Authentication</h1>
        <Login />
      </div>
    </AuthProvider>
  );
};

export default Index;
