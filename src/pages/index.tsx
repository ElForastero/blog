import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { Common as Layout } from 'src/layouts/common';
import { Hero } from 'src/components/organisms/Hero';
import { Articles } from 'src/components/organisms/Articles';
import { Projects } from 'src/components/organisms/Projects';
import { Talks } from 'src/components/organisms/Talks';
import { Tools } from 'src/components/organisms/Tools';
import { AlternateLinks } from 'src/components/organisms/AlternateLinks';
import s from './Home.module.css';
import { getAllPosts } from '../libs/api';

const Home = ({ posts }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{t`meta:home.title`}</title>
        <meta name="description" content={t`meta:home.description`} />
        <meta name="keywords" content={t`meta:home.keywords`} />
      </Head>
      <AlternateLinks url="/" />
      <Hero />
      <Articles className={s.section} posts={posts} count={3} showBlogLink />
      <Projects className={s.section} />
      <Talks className={s.section} />
      <Tools className={s.section} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
