import { createContext } from 'react';

// initial State
const initialAuth = {
  auth: false,
};

// create Context
const AuthState = createContext({});

export { initialAuth, AuthState };
