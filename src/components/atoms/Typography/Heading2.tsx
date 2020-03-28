import React from 'react';
import cc from 'classcat';
import s from './Typography.module.css';

type Props = {
  className?: string;
};

export const Heading2: React.FC<Props> = ({ className, children }) => (
  <h2 className={cc([s.heading2, className])}>{children}</h2>
);
