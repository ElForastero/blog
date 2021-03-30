import React, { HTMLAttributes } from 'react';
import cc from 'classcat';
import Link, { LinkProps } from 'next/link';
import s from './NavigationLink.module.css';

type Props = Omit<LinkProps, 'href'> &
  HTMLAttributes<HTMLButtonElement> & {
    href?: string;
    external?: boolean;
  };

/**
 * The link used in horizontal and vertical navigations, and also in the footer.
 */
export const NavigationLink: React.FC<Props> = ({
  className,
  children,
  external = false,
  href,
  ...rest
}) =>
  external && href ? (
    // @ts-ignore
    <a
      className={cc([s.root, className])}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  ) : href ? (
    <Link href={href} {...rest}>
      <a className={s.root}>{children}</a>
    </Link>
  ) : (
    <button type="button" className={cc([s.root, className])} {...rest}>
      {children}
    </button>
  );
