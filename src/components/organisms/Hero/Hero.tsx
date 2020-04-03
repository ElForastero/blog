import React from 'react';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { Avatar } from 'src/components/atoms/Avatar';
import { Highlighter } from 'src/components/atoms/Highlighter';
import s from './Hero.module.css';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={s.root}>
      <Avatar src={require('./assets/eugene.jpg')} className={s.avatar} />
      <h1 className={s.description}>
        <Trans i18nKey="home:greeting" components={[<Highlighter />]} />
        <br />
        {t`home:welcome`}
      </h1>
    </div>
  );
};
