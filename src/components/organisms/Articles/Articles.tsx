import React from 'react';
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
}) => (
  <section className={className}>
    <Heading2 className={s.heading}>
      Latest articles{' '}
      {showBlogLink && (
        <Button className={s.button} href="/blog">
          Show All
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
