import { useState, useEffect } from 'react';

import styles from './index.module.css';

import { useTheme } from '../../store/contexts/themeContext';
import { Sun, Moon } from '../icons';

const ToggleTheme = () => {
  const [mount, setMount] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;
  return (
    <button
      type="button"
      aria-label="toggleTheme"
      onClick={toggleTheme}
      className={styles.toggle}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  );
};

export default ToggleTheme;
