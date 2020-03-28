import React, { HTMLAttributes } from 'react';
import { Heading2 } from 'src/components/atoms/Typography';
import s from './Tools.module.css';

const react = require('src/assets/img/tools/react.svg');
const redux = require('src/assets/img/tools/redux.svg');
const graphql = require('src/assets/img/tools/graphql.svg');
const apollo = require('src/assets/img/tools/apollographql.svg');
const webpack = require('src/assets/img/tools/webpack.svg');
const webstorm = require('src/assets/img/tools/webstorm.svg');
const typescript = require('src/assets/img/tools/typescript.svg');
const docker = require('src/assets/img/tools/docker.svg');
const laravel = require('src/assets/img/tools/laravel.svg');
const php = require('src/assets/img/tools/php.svg');

const tools = [
  { icon: react, title: 'React', link: 'https://reactjs.org' },
  { icon: redux, title: 'Redux', link: 'https://redux.js.org' },
  { icon: graphql, title: 'GraphQL', link: 'https://graphql.org' },
  { icon: apollo, title: 'Apollo', link: 'https://www.apollographql.com' },
  { icon: webpack, title: 'Webpack', link: 'https://webpack.js.org' },
];

const tools2 = [
  {
    icon: webstorm,
    title: 'WebStorm',
    link: 'https://www.jetbrains.com/webstorm',
  },
  {
    icon: typescript,
    title: 'TypeScript',
    link: 'https://www.typescriptlang.org',
  },
  { icon: docker, title: 'Docker', link: 'https://www.docker.com' },
  { icon: laravel, title: 'Laravel', link: 'https://laravel.com' },
  { icon: php, title: 'PHP', link: 'https://www.php.net' },
];

export const Tools: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => (
  <section className={className}>
    <Heading2>Tools I’m using</Heading2>
    <div className={s.root}>
      <div>
        {tools.map(({ link, icon, title }) => (
          <a
            href={link}
            key={title}
            className={s.item}
            rel="noopener,noreferrer"
            target="_blank"
          >
            <img className={s.icon} src={icon} alt={title} />
            {title}
          </a>
        ))}
      </div>
      <div>
        {tools2.map(({ link, icon, title }) => (
          <a
            href={link}
            key={title}
            className={s.item}
            rel="noopener,noreferrer"
            target="_blank"
          >
            <img className={s.icon} src={icon} alt={title} />
            {title}
          </a>
        ))}
      </div>
    </div>
  </section>
);
