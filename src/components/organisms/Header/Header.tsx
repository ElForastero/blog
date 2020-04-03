import React from 'react';
import Link from 'next-translate/Link';
import useTranslation from 'next-translate/useTranslation';
import { Logo } from 'src/components/atoms/Logo';
import { Navigation } from 'src/components/atoms/Navigation';
import { NavigationLink } from 'src/components/atoms/NavigationLink';
import { ThemeSwitcher } from 'src/components/atoms/ThemeSwitcher';
import { LanguageSwitch } from 'src/components/organisms/LanguageSwitch';
import s from './Header.module.css';

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className={s.root}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <Navigation>
        <NavigationLink href="/bookshelf">{t`common:bookshelf`}</NavigationLink>
        <NavigationLink href="https://linkedin.com/in/elforastero" external>
          {t`common:contact`}
        </NavigationLink>
        <NavigationLink href="https://linkedin.com/in/elforastero" external>
          {t`common:cv`}
        </NavigationLink>
        <LanguageSwitch />
        <ThemeSwitcher />
      </Navigation>
    </header>
  );
};
