import React, { useState } from 'react';
import s from './Navigation.module.css';
const menu = require('./assets/menu.svg?include');
const x = require('./assets/x.svg?include');

export const Navigation = ({ children }) => {
  const [isOpen, toggle] = useState(false);

  return (
    <div className={s.root} data-is-open={isOpen}>
      <span
        role="button"
        className={s.icon}
        onClick={() => toggle(true)}
        aria-label="Menu"
        dangerouslySetInnerHTML={{ __html: menu }}
      />
      <nav className={s.nav}>
        <span
          role="button"
          className={s.close}
          onClick={() => toggle(false)}
          aria-label="Menu close"
          dangerouslySetInnerHTML={{ __html: x }}
        />
        <div className={s.items}>
          {children}
        </div>
      </nav>
    </div>
  );
};
