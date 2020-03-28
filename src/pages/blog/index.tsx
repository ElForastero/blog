import React from 'react';
import Head from 'next/head';
import { getAllPosts } from 'src/libs/api';
import { Home as Layout } from 'src/layouts/home';
import { Articles } from 'src/components/organisms/Articles';
import s from './Blog.module.css';

const Blog = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>Blog posts</title>
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
