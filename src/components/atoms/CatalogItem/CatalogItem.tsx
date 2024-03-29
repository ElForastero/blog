import React, { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import s from './CatalogItem.module.css';

type Props = LinkProps & {
  icon: ReactNode;
  external?: boolean;
};

export const CatalogItem: React.FC<Props> = ({ children, icon, external = false, ...rest }) =>
  external ? (
    // @ts-ignore
    <a className={s.root} target="_blank" {...rest}>
      <span className={s.icon}>{icon}</span>
      {children}
    </a>
  ) : (
    <Link {...rest}>
      <a className={s.root}>
        <span className={s.icon}>{icon}</span>
        {children}
      </a>
    </Link>
  );
