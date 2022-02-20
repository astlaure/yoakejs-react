import React from 'react';
import { Profile } from '../models/profile.model';

export interface AuthState {
  authenticated: boolean;
  profile?: Profile;
}

export const initialState: AuthState = {
  authenticated: false,
};

type ReactContext = { state: AuthState, dispatch: React.Dispatch<any> };
const AuthContext = React.createContext<ReactContext>({ state: initialState, dispatch: () => {} });

export default AuthContext;
