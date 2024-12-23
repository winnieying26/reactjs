export interface AuthState {
  user: null | { id: string; name: string; email: string };
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export type AuthAction =
  | { type: "LOGIN_REQUEST" }
  | {
      type: "LOGIN_SUCCESS";
      payload: { id: string; name: string; email: string };
    }
  | { type: "LOGIN_FAILURE"; payload: string }
  | { type: "LOGOUT" };

const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

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

export {authReducer, initialAuthState}