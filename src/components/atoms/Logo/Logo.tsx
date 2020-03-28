import React, { Fragment } from 'react';
import s from './Logo.module.css';

export const Logo: React.FC = () => (
  <div className={s.root}>
    🐥<span className={s.text}>ElForastero</span>
  </div>
);
