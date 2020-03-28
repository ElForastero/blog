import React, { HTMLAttributes } from 'react';
import cc from 'classcat';
import s from './Avatar.module.css';

type Props = HTMLAttributes<HTMLImageElement> & {
  src: string;
};

export const Avatar: React.FC<Props> = ({ src, className }) => (
  <img
    src={src}
    alt="Eugene Dzhumak"
    className={cc([s.root, className])}
  />
);
