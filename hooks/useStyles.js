// hooks/useStyles.js
import { useMemo } from 'react';
import { useTheme } from '../styles/ThemeContext';

export function useStyles(styleFactory) {
  const { theme } = useTheme();

  return useMemo(
    () => styleFactory(theme),
    [theme, styleFactory]
  );
}