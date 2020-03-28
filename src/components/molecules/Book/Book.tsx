import React from 'react';
import cc from 'classcat';
import s from './Book.module.css';

export type BookType = {
  className?: string;
  cover: string;
  title: string;
  author: string;
  rating: string;
  genres: Array<string>;
};

export const Book = ({ className, cover, title, author, rating }) => (
  <div className={cc([s.root, className])}>
    <div className={s.cover} style={{ backgroundImage: `url(${cover})` }} />
    <div className={s.meta}>
      <div className={s.title}>{title}</div>
      <div className={s.author}>{author}</div>
      <div className={s.rating}>{rating}</div>
    </div>
  </div>
);
