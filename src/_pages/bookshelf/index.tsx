import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import books from 'src/books';
import { Provider as BookshelfProvider } from 'src/components/context/BookshelfContext';
import { Books } from 'src/components/organisms/Books';
import { Genres } from 'src/components/organisms/Genres';
import { Home as Layout } from 'src/layouts/home';

const Bookshelf: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{t`meta:bookshelf.title`}</title>
        <meta name="description" content={t`meta:bookshelf.description`} />
        <meta name="keywords" content={t`meta:bookshelf.keywords`} />
      </Head>
      <BookshelfProvider>
        <Books books={books} />
        <Genres books={books} />
      </BookshelfProvider>
    </Layout>
  );
};

export default Bookshelf;
