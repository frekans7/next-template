import { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import {
  ThemeContext,
  GlobalState,
  initialGlobal,
  AuthState,
  initialAuth,
} from './contexts';
import { globalReducer, authReducer } from './reducers';

// combine Reducer function
const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i += 1)
    // eslint-disable-next-line no-param-reassign
    state = reducers[i](state, action);
  return state;
};

// context Provider
const Provider = ({ children }) => {
  // Theme Context
  const [theme, setTheme] = useState(() => global.window?.__theme || 'light');
  const toggleTheme = () => {
    global.window.__setPreferredTheme(theme === 'light' ? 'dark' : 'light');
  };
  useEffect(() => {
    global.window.__onThemeChange = setTheme;
  }, []);

  // Global State
  const [state, dispatch] = useReducer(
    combineReducers(globalReducer),
    initialGlobal
  );
  const value = { state, dispatch };

  // Auth State
  const [state2, dispatch2] = useReducer(
    combineReducers(authReducer),
    initialAuth
  );
  const value2 = { state2, dispatch2 };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <GlobalState.Provider value={value}>
        <AuthState.Provider value={value2}>{children}</AuthState.Provider>
      </GlobalState.Provider>
    </ThemeContext.Provider>
  );
};
Provider.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Provider;
