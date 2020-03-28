import React from 'react';
import Head from 'next/head';
import books from 'src/books';
import { Provider as BookshelfProvider } from 'src/components/context/BookshelfContext';
import { Books } from 'src/components/organisms/Books';
import { Genres } from 'src/components/organisms/Genres';
import { Home as Layout } from 'src/layouts/home';

const Bookshelf: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>My Bookshelf</title>
      </Head>
      <BookshelfProvider>
        <Books books={books} />
        <Genres books={books} />
      </BookshelfProvider>
    </Layout>
  );
};

export default Bookshelf;
