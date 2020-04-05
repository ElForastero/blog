import React from 'react';
import cc from 'classcat';
import s from './Typography.module.css';

type Props = {
  className?: string;
};

export const Heading3: React.FC<Props> = ({ className, children }) => (
  <h3 className={cc([s.heading3, className])}>{children}</h3>
);
