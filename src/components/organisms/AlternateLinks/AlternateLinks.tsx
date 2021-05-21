import React from 'react';
import Head from 'next/head';
import config from 'src/../i18n.json';

type Props = {
  url: string;
};

export const AlternateLinks: React.FC<Props> = ({ url }) => {
  return (
    <Head>
      {config.locales.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/${lang}${url}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${process.env.NEXT_PUBLIC_SITE_URL}${url}`}
      />
    </Head>
  );
};
