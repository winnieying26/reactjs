import { useReducer, useState, useEffect} from "react";
// for security password should be handled safely
interface AuthState {
  user: null | { id: string; name: string; email: string };
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

type AuthAction =
  | { type: "LOGIN_REQUEST" }
  | {
      type: "LOGIN_SUCCESS";
      payload: { id: string; name: string; email: string };
    }
  | { type: "LOGIN_FAILURE"; payload: string }
  | { type: "LOGOUT" };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, user: null, error: null };
    default:
      return state;
  }
};

const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const AuthApp: React.FC = () => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    setEmail("");
    setPassword("")
  },[])

  const handleLogin = async () => {
    dispatch({ type: "LOGIN_REQUEST" });
    try {
      const user = await new Promise<{
        id: string;
        name: string;
        email: string;
      }>((resolve, reject) =>
        setTimeout(() => {
          if (email === "test@example.com" && password === "password123") {
            resolve({ id: "1", name: "Jonh Doe", email });
          } else {
            reject(new Error("Invalid credentials"));
          }
        }, 1000)
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
      setPassword(""); // clear password from the input for security
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: (error as Error).message });
    }
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Authentication</h2>
      {state.loading && <p>Loading</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      {!state.isAuthenticated ? (
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
            placeholder="email"
            autoComplete="off"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="off"
            required
          />
          <button type="submit">Log in</button>
        </form>
      ) : (
        <div>
          <p>Welcome, {state.user?.name}</p>
          <button onClick={handleLogout}>Log out</button>
        </div>
      )}
    </div>
  );
};

export default AuthApp;
