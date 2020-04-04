import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { getAllPosts } from 'src/libs/api';
import { Home as Layout } from 'src/layouts/home';
import { Articles } from 'src/components/organisms/Articles';
import s from './Blog.module.css';

const Blog = ({ posts }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{t`meta:blog.title`}</title>
        <meta name="description" content={t`meta:blog.description`} />
        <meta name="keywords" content={t`meta:blog.keywords`} />
      </Head>
      <Articles className={s.root} posts={posts} />
    </Layout>
  );
};

export const getStaticProps = async () => ({
  props: {
    posts: getAllPosts(),
  },
});

export default Blog;
