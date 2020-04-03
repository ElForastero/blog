import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NavigationLink } from 'src/components/atoms/NavigationLink';

export const LanguageSwitch: React.FC = () => {
  const { lang } = useTranslation();

  return (
    <NavigationLink href="/" lang={lang === 'en' ? 'ru' : 'en'}>
      {lang === 'en' ? '🇷🇺 Русский' : '🇺🇸 English󠁧󠁢'}
    </NavigationLink>
  );
};
