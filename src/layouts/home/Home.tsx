import React, { HTMLAttributes } from 'react';
import { Header } from 'src/components/organisms/Header';
import { Footer } from 'src/components/organisms/Footer';
import s from './Home.module.css';

/**
 * Layout for Home page.
 */
export const Home: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
}) => {
  return (
    <div className={s.root}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
