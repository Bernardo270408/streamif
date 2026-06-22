// styles/ThemeContext.js
import { createContext, useContext, useState } from 'react';
import { DARK_THEME, LIGHT_THEME } from './theme';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(DARK_THEME);

  const toggleTheme = () => {
    setTheme(current =>
      current === DARK_THEME ? LIGHT_THEME : DARK_THEME
    );
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}> {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);