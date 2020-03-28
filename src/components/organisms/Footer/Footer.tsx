import React from 'react';
import { NavigationLink } from 'src/components/atoms/NavigationLink';
import s from './Footer.module.css';

export const Footer: React.FC = () => (
  <footer className={s.root}>
    <NavigationLink href="https://github.com/elforastero" external>
      GitHub
    </NavigationLink>
    <NavigationLink href="https://linkedin.com/in/elforastero" external>
      LinkedIn
    </NavigationLink>
    <NavigationLink href="https://t.me/elforastero" external>
      Telegram
    </NavigationLink>
  </footer>
);
