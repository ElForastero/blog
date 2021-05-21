import React, { HTMLAttributes } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Heading2 } from 'src/components/atoms/Typography';
import { CatalogItem } from 'src/components/atoms/CatalogItem';

export const Projects: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <section className={className}>
      <Heading2>{t`home:projects`}</Heading2>
      <CatalogItem
        icon="🗞"
        href="https://chrome.google.com/webstore/detail/pulse-feed-reader/lcobhhomehlpbfhobkimfcnohdchjdke"
        external
      >
        Pulse Feed RSS Reader
      </CatalogItem>
      <CatalogItem
        icon="⚛️"
        href="https://github.com/ElForastero/react-browser-extension-boilerplate"
        external
      >
        React Browser Extension Boilerplate
      </CatalogItem>
    </section>
  );
};
