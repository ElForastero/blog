import React, { HTMLAttributes } from 'react';
import { Heading2 } from 'src/components/atoms/Typography';
import { CatalogItem } from 'src/components/atoms/CatalogItem';

export const Projects: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => (
  <section className={className}>
    <Heading2>Projects</Heading2>
    <CatalogItem
      icon="⚛️"
      href="https://github.com/ElForastero/react-browser-extension-boilerplate"
      external
    >
      React Browser Extension Boilerplate
    </CatalogItem>
    <CatalogItem
      icon="🇷🇺"
      href="https://github.com/ElForastero/Transliterate"
      external
    >
      Laravel 6 Transliteration Package
    </CatalogItem>
    <CatalogItem
      icon="👆"
      href="https://github.com/ElForastero/use-click-outside"
      external
    >
      use-click-outside hook with Shadow DOM support
    </CatalogItem>
  </section>
);