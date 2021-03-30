import React from 'react';
import cc from 'classcat';
import Link from 'next/link';
import s from './Button.module.css';

type Props = {
  href?: string;
  className?: string;
};

export const Button: React.FC<Props> = ({ href, className, children }) =>
  href ? (
    <Link href={href}>
      <a className={cc([s.root, className])}>{children}</a>
    </Link>
  ) : (
    <button className={cc([s.root, className])}>{children}</button>
  );
