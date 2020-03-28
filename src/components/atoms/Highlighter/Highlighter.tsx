import React from 'react';
import s from './Highlighter.module.css';

export const Highlighter: React.FC = ({ children }) => (
  <span className={s.root}>{children}</span>
);
