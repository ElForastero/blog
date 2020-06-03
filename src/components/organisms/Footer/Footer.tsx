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
    <NavigationLink href="https://twitter.com/el4astero" external>
      Twitter
    </NavigationLink>
    <NavigationLink href="https://nextjs.org" className={s.right} external>
      Built with <span title="love">❤️</span> and Next.js
    </NavigationLink>
    <NavigationLink href="https://github.com/ElForastero/blog" external>
      Sources
    </NavigationLink>
  </footer>
);
