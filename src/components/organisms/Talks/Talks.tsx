import React, { HTMLAttributes } from 'react';
import { Heading2 } from 'src/components/atoms/Typography';
import { CatalogItem } from 'src/components/atoms/CatalogItem';

export const Talks: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => (
  <section className={className}>
    <Heading2>Talks</Heading2>
    <CatalogItem icon="🛰" href="https://wdmeetup.ru/wdm-5.html" external>
      Though REST and Redux to GraphQL and Apollo
    </CatalogItem>
    <CatalogItem icon="🐳" href="https://wdmeetup.ru/wdm-2.html" external>
      Had a little talk about the Docker for the frontend guys
    </CatalogItem>
    <CatalogItem icon="🏎" href="https://wdmeetup.ru/wdm-1.html" external>
      60 FPS － Speed up the web
    </CatalogItem>
  </section>
);
