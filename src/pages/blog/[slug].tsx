import React from 'react';
import ReactDOM from 'react-dom/server';
import Head from 'next/head';
import { getAllPosts, getPostBySlug } from 'src/libs/api';
import { MDXProvider } from '@mdx-js/react';
import { Home as Layout } from 'src/layouts/home';
import { Code } from 'src/components/organisms/Code';
import s from './Post.module.css';

const components = {
  pre: props => <div {...props} />,
  code: Code,
};

const Post = ({ meta, content }) => {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Head>
      <div className={s.root}>
        <header className={s.header}>
          <div
            // style={{ backgroundImage: `url(${meta.cover})` }}
            className={s.cover}
          >
            🚀
          </div>
          <div className={s.meta}>
            <h1 className={s.title}>{meta.title}</h1>
            <time className={s.date}>
              {new Date(meta.date).toLocaleDateString('en', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </div>
        </header>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  const data = getPostBySlug(slug);
  const PageContent = data.default;

  return {
    props: {
      meta: data.meta,
      content: ReactDOM.renderToStaticMarkup(
        <MDXProvider components={components}>
          <PageContent />
        </MDXProvider>
      ),
    },
  };
};

export const getStaticPaths = async () => ({
  fallback: false,
  paths: getAllPosts().map(({ slug }) => ({ params: { slug } })),
});

export default Post;
