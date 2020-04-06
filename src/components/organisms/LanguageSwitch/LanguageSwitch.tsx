import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NavigationLink } from 'src/components/atoms/NavigationLink';
import { event } from 'src/libs/gtag';

export const LanguageSwitch: React.FC = () => {
  const { lang } = useTranslation();
  let newLanguage = lang === 'en' ? 'ru' : 'en';

  return (
    <NavigationLink
      href="/"
      lang={newLanguage}
      onClick={() => {
        event({
          action: 'change_language',
          category: 'i18n',
          label: newLanguage,
        });
      }}
    >
      {lang === 'en' ? '🇷🇺 Русский' : '🇺🇸 English󠁧󠁢'}
    </NavigationLink>
  );
};
