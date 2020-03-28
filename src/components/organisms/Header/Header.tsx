import React from 'react';
import Link from 'next/link';
import { Logo } from 'src/components/atoms/Logo';
import { Navigation } from 'src/components/atoms/Navigation';
import { NavigationLink } from 'src/components/atoms/NavigationLink';
import { ThemeSwitcher } from 'src/components/atoms/ThemeSwitcher';
import s from './Header.module.css';

export const Header: React.FC = () => (
  <header className={s.root}>
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>
    <Navigation>
      <NavigationLink href="/about">About me</NavigationLink>
      <NavigationLink href="/bookshelf">Bookshelf</NavigationLink>
      <NavigationLink href="https://linkedin.com/in/elforastero" external>
        Contact
      </NavigationLink>
      <NavigationLink href="/cv">CV</NavigationLink>
      <ThemeSwitcher />
    </Navigation>
  </header>
);
