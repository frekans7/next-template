import { createContext } from 'react';

// initial State
const initialGlobal = {
  count: 0,
};
// create Context
const GlobalState = createContext({});

export { initialGlobal, GlobalState };
