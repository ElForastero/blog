import React from 'react';
import useDarkMode from 'use-dark-mode';
import { NavigationLink } from 'src/components/atoms/NavigationLink';

export const ThemeSwitcher: React.FC = () => {
  const darkMode = useDarkMode();

  return (
    <NavigationLink onClick={darkMode.toggle}>
      {darkMode.value ? '💡' : '🌙'}
    </NavigationLink>
  );
};
