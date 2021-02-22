import { useContext, createContext } from 'react';

export const ThemeContext = createContext('light');

export const useTheme = () => useContext(ThemeContext);
