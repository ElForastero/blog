import React, { Fragment } from 'react';
import Head from 'next/head';
import config from 'src/../i18n.json';

type Props = {
  url: string;
};

export const AlternateLinks: React.FC<Props> = ({ url }) => {
  return (
    <Head>
      {config.locales.map(lang => (
        <link
          rel="alternate"
          hrefLang={lang}
          href={`${process.env.SITE_URL}/${lang}${url}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${process.env.SITE_URL}${url}`}
      />
    </Head>
  );
};
