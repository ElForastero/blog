import React, { useMemo, useContext } from 'react';
import cc from 'classcat';
import useTranslation from 'next-translate/useTranslation';
import {
  Context,
  FILTER_BY_GENRE,
} from 'src/components/context/BookshelfContext';
import { NavigationLink } from 'src/components/atoms/NavigationLink';
import { Heading2 } from 'src/components/atoms/Typography';
import s from './Genres.module.css';

const cross = require('./assets/x-circle.svg?include');

export const Genres = ({ books }) => {
  const { t } = useTranslation();
  const [filters, dispatch] = useContext(Context);

  const genres = useMemo<Array<string>>(() => {
    const nonUnique = books.reduce((acc, { genres }) => acc.concat(genres), []);
    return Array.from(new Set(nonUnique));
  }, [books]);

  return (
    <div className={s.root}>
      <Heading2>{t`bookshelf:genres`}</Heading2>
      <nav className={s.nav}>
        {genres.map(genre => {
          const isActive = genre === filters.genre;

          return (
            <NavigationLink
              key={genre}
              className={cc({
                [s.item]: true,
                [s.active]: genre === filters.genre,
              })}
              onClick={() =>
                dispatch({
                  type: FILTER_BY_GENRE,
                  payload: isActive ? null : genre,
                })
              }
            >
              {t(`books:genres.${genre}`)}
              {isActive && (
                <span
                  className={s.close}
                  dangerouslySetInnerHTML={{ __html: cross }}
                />
              )}
            </NavigationLink>
          );
        })}
      </nav>
    </div>
  );
};
