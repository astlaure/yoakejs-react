import React, { useEffect, useMemo, useReducer } from 'react';
import AuthContext, { initialState } from './AuthContext';
import AuthContextReducer from './AuthContextReducer';
import useHttpClient from '../../core/hooks/useHttpClient';

export interface Props {
  children: React.ReactElement | React.ReactElement[];
}

function AuthContextProvider(props: Props): React.ReactElement {
  const { children } = props;
  const httpClient = useHttpClient();
  const [state, dispatch] = useReducer(AuthContextReducer, initialState);

  useEffect(() => {
    httpClient.get('api/auth/profile')
      .then((profile) => dispatch({ type: 'LOGIN', payload: profile }))
      .catch(() => {});
  }, []);

  const context = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
