import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Heading2 } from 'src/components/atoms/Typography';
import { Button } from 'src/components/atoms/Button';
import { CatalogItem } from 'src/components/atoms/CatalogItem';
import s from './Articles.module.css';

type Props = {
  className: string;
  count?: number;
  posts?: Array<any>;
  showBlogLink?: boolean;
};

export const Articles: React.FC<Props> = ({ className, count, posts }) => {
  const { t, lang } = useTranslation();

  return (
    <section className={className}>
      <Heading2 className={s.heading}>
        {t`home:latest_articles`}{' '}
        <Button className={s.button} href="/blog">
          {t`home:show_all`}
        </Button>
      </Heading2>
      {posts[lang]
        .slice(0, count ?? posts.length)
        .map(({ slug, title, icon }) => (
          <CatalogItem
            key={slug}
            icon={icon}
            href={`/blog/[slug]`}
            as={`/blog/${slug}`}
          >
            {title}
          </CatalogItem>
        ))}
    </section>
  );
};
