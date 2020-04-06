import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { BlogPosting } from 'schema-dts';
import { JsonLd } from 'react-schemaorg';

type Props = {
  title: string;
  description: string;
  keywords: Array<string>;
  genre: Array<string>;
  slug: string;
  datePublished: string;
  dateModified: string;
  lang: string;
  cover: string;
};

export const Schema: React.FC<Props> = ({
  title,
  description,
  keywords,
  genre,
  slug,
  datePublished,
  dateModified,
  cover,
  lang,
}) => {
  const { t } = useTranslation();

  return (
    <JsonLd<BlogPosting>
      item={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        author: {
          '@type': 'Person',
          name: t`meta:schema.author.name`,
          alternateName: t`meta:schema.author.alternateName`,
          knowsAbout: t`meta:schema.author.knowsAbout`.split(', '),
        },
        name: title,
        headline: title,
        inLanguage: lang,
        description,
        keywords,
        genre,
        datePublished,
        dateModified,
        url: `${process.env.SITE_URL}/${lang}/blog/${slug}`,
        image: `${process.env.SITE_URL}${cover}`,
        publisher: {
          '@type': 'Person',
          name: t`meta:schema.author.name`,
        },
      }}
    />
  );
};
