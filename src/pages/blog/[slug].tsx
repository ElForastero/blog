import React, { Fragment } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { getAllPosts, getPostBySlug } from 'src/libs/api';
import { Common as Layout } from 'src/layouts/common';
import { Code } from 'src/components/organisms/Code';
import { Schema } from 'src/components/organisms/Schema';
import s from './[slug].module.css';

const Post = ({ status = null, slug, meta }) => {
  const { t, lang } = useTranslation();

  // @todo Find a way to properly render 404 page
  if (status !== null) {
    return (
      <Head>
        <meta httpEquiv="refresh" content="0;URL=/" />
      </Head>
    );
  }

  const { default: Content } = getPostBySlug(lang, slug);

  return (
    <Fragment>
      <Layout>
        <Head>
          <title>{t('meta:post.title', { title: meta.title })}</title>
          <meta name="description" content={meta.description} />
          <meta name="keywords" content={meta.keywords} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURIComponent(meta.title)}.jpg`}
          />
          <meta
            property="og:url"
            content={`${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/blog/${slug}`}
          />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta
            name="twitter:image"
            content={`https://og-image.now.sh/${encodeURIComponent(meta.title)}.jpg`}
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <div className={s.root}>
          <header className={s.header}>
            <div className={s.cover}>{meta.icon}</div>
            <div className={s.meta}>
              <h1 className={s.title}>{meta.title}</h1>
              <time className={s.date}>
                {new Date(meta.datePublished).toLocaleDateString(lang, {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
            </div>
          </header>
          <MDXProvider components={{ code: Code }}>
            <Content />
          </MDXProvider>
        </div>
      </Layout>
      <Schema {...meta} lang={lang} slug={slug} />
    </Fragment>
  );
};

export const getStaticProps = async ({ params: { slug }, locale }) => {
  const { default: PageContent, ...data } = getPostBySlug(locale, slug, true);

  // No translation for this post
  if (PageContent === undefined) {
    return { props: { status: 404 } };
  }

  return {
    props: {
      ...data,
      locale,
      slug,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts();

  const paths = Object.keys(posts).flatMap((lang) =>
    posts[lang].map(({ slug }) => ({ params: { slug }, locale: lang }))
  );

  return {
    fallback: false,
    paths,
  };
};

export default Post;
