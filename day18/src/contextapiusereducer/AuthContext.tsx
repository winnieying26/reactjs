import React, { createContext, useContext, useReducer, ReactNode } from "react";
import {
  authReducer,
  initialAuthState,
  AuthState,
  AuthAction,
} from "./authReducer";

const AuthStateContext = createContext<AuthState | undefined>(undefined);
const AuthDispatchContext = createContext<
  React.Dispatch<AuthAction> | undefined
>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (!context)
    throw new Error("useAuthState must be used within a AuthProvider");
  return context;
};

const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (!context)
    throw new Error("useAuthDispatch must be used within an AuthProvider");
  return context;
};

export { AuthProvider, useAuthState, useAuthDispatch };
