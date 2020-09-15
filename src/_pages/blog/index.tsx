import React, { Fragment } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { getAllPosts } from 'src/libs/api';
import { Common as Layout } from 'src/layouts/common';
import { Heading2, Heading3 } from 'src/components/atoms/Typography';
import { CatalogItem } from 'src/components/atoms/CatalogItem';
import { AlternateLinks } from 'src/components/organisms/AlternateLinks';
import s from './index.module.css';

const Blog = ({ posts }) => {
  const { t, lang } = useTranslation();
  let lastDate = null;

  const postsSortedChronologically = posts[lang]
    .sort(
      ({ datePublished: d1 }, { datePublished: d2 }) =>
        new Date(d2).getTime() - new Date(d1).getTime()
    )
    .reduce((acc, post) => {
      const year = new Date(post.datePublished).getFullYear();

      return { ...acc, [year]: [...(acc[year] ?? []), post] };
    }, {});

  return (
    <Layout>
      <Head>
        <title>{t`meta:blog.title`}</title>
        <meta name="description" content={t`meta:blog.description`} />
        <meta name="keywords" content={t`meta:blog.keywords`} />
      </Head>
      <AlternateLinks url="/blog" />
      <section className={s.root}>
        <Heading2 className={s.heading}>{t`blog:heading`} </Heading2>
        {Object.keys(postsSortedChronologically)
          .reverse()
          .map(year => (
            <section className={s.section} key={year}>
              <Heading3 className={s.heading}>{year}</Heading3>

              <table className={s.table}>
                <tbody>
                  {postsSortedChronologically[year].map(
                    ({ slug, title, icon, datePublished }) => (
                      <tr key={slug}>
                        <td className={s.dateCell}>
                          <time className={s.date}>
                            {new Date(datePublished).toLocaleDateString(lang, {
                              day: 'numeric',
                              month: '2-digit',
                            })}
                          </time>
                        </td>
                        <td>
                          <CatalogItem
                            key={slug}
                            icon={icon}
                            href={`/blog/[slug]`}
                            as={`/blog/${slug}`}
                          >
                            {title}
                          </CatalogItem>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </section>
          ))}
      </section>
    </Layout>
  );
};

export const getStaticProps = async () => ({
  props: {
    posts: getAllPosts(),
  },
});

export default Blog;
