import React from 'react';
import Head from 'next/head';
import { Home as Layout } from 'src/layouts/home';
import { Hero } from 'src/components/organisms/Hero';
import { Articles } from 'src/components/organisms/Articles';
import { Projects } from 'src/components/organisms/Projects';
import { Talks } from 'src/components/organisms/Talks';
import { Tools } from 'src/components/organisms/Tools';
import s from './Home.module.css';
import { getAllPosts } from '../libs/api';

const Home = ({ posts }) => (
  <Layout>
    <Head>
      <title>ElForastero</title>
    </Head>
    <Hero />
    <Articles className={s.section} posts={posts} count={5} showBlogLink />
    <Projects className={s.section} />
    <Talks className={s.section} />
    <Tools className={s.section} />
  </Layout>
);

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
