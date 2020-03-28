import React from 'react';
import { Avatar } from 'src/components/atoms/Avatar';
import { Highlighter } from 'src/components/atoms/Highlighter';
import s from './Hero.module.css';

export const Hero: React.FC = () => (
  <div className={s.root}>
    <Avatar src={require('./assets/eugene.jpg')} className={s.avatar} />
    <h1 className={s.description}>
      Hi, my name is <Highlighter>Eugene</Highlighter>. 👋
      <br />
      I’m a frontend engineer from Russia.
    </h1>
  </div>
);
