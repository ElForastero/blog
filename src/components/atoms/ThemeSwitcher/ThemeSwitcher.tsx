import React, { useRef, useState, useEffect } from 'react';
import { NavigationLink } from 'src/components/atoms/NavigationLink';

const STORAGE_KEY = 'theme';

export const ThemeSwitcher: React.FC = () => {
  const initialRenderingRef = useRef(true);
  const predefinedTheme =
    typeof window !== 'undefined'
      ? window.localStorage.getItem('theme')
      : 'light';
  const [theme, setTheme] = useState(predefinedTheme ?? 'light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!initialRenderingRef.current) {
        document.body.style.transition = 'all .2s ease-in-out';
      }
      window.localStorage.setItem(STORAGE_KEY, theme);
      document.body.dataset.theme = theme;

      setTimeout(() => {
        document.body.style.removeProperty('transition');
      }, 300);
    }

    initialRenderingRef.current = false;
  }, [theme, initialRenderingRef]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <NavigationLink onClick={toggleTheme}>
      {theme === 'dark' ? '💡' : '🌙'}
    </NavigationLink>
  );
};
