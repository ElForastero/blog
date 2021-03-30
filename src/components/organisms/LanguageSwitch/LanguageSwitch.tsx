import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NavigationLink } from 'src/components/atoms/NavigationLink';

export const LanguageSwitch: React.FC = () => {
  const { lang } = useTranslation();
  let newLanguage = lang === 'en' ? 'ru' : 'en';

  return (
    <NavigationLink href="/" locale={newLanguage}>
      {lang === 'en' ? '🇷🇺 Русский' : '🇺🇸 English󠁧󠁢'}
    </NavigationLink>
  );
};
