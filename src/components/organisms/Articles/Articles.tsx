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

export const Articles: React.FC<Props> = ({
  className,
  count,
  posts,
  showBlogLink,
}) => {
  const { t } = useTranslation();

  return (
    <section className={className}>
      <Heading2 className={s.heading}>
        {t`common:latest_articles`}{' '}
        {showBlogLink && (
          <Button className={s.button} href="/blog">
            {t`common:show_all`}
          </Button>
        )}
      </Heading2>
      {posts.slice(0, count ?? posts.length).map(({ slug, title, cover }) => (
        <CatalogItem key={slug} icon={cover} href={`/blog/${slug}`}>
          {title}
        </CatalogItem>
      ))}
    </section>
  );
};
