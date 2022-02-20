import { AuthState } from './AuthContext';

interface Action {
  type: string;
  payload?: any;
}

function AuthContextReducer(state: AuthState, action: Action): AuthState {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, authenticated: true, profile: action.payload };
    case 'LOGOUT':
      return { ...state, authenticated: false, profile: undefined };
    default:
      return state;
  }
}

export default AuthContextReducer;
