import React, { ReactElement, Fragment, useState, useEffect } from 'react';
import cc from 'classcat';
import { Portal } from 'react-portal';
import s from './LightBox.module.css';

type Props = {
  children: Array<ReactElement>;
  gallery?: boolean;
};

export const LightBox: React.FC<Props> = ({ children, gallery = false }) => {
  const [isActive, toggle] = useState(false);
  const [index, setIndex] = useState(0);
  const imagesCount = React.Children.count(children);

  const close = () => {
    toggle(false);
    setIndex(0);
  };

  const open = (i: number) => {
    setIndex(i);
    toggle(true);
  };

  useEffect(() => {
    const paginationListener = (event: KeyboardEvent) => {
      if (event.code === 'ArrowLeft' && index > 0) {
        setIndex(index - 1);
      }
      if (event.code === 'ArrowRight' && index < imagesCount - 1) {
        setIndex(index + 1);
      }
    };
    const closeListener = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        toggle(false);
      }
    };

    isActive && window.addEventListener('keydown', paginationListener);
    isActive && window.addEventListener('keydown', closeListener);

    return () => {
      window.removeEventListener('keydown', paginationListener);
      window.removeEventListener('keydown', closeListener);
    };
  }, [isActive, index]);

  return (
    <Fragment>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          className: cc({ [s.img]: true, [s.galleryItem]: gallery }),
          onClick: () => open(i),
        })
      )}
      {isActive && (
        <Portal>
          <div className={s.lightbox} onClick={close}>
            {gallery && index > 0 && (
              <button
                type="button"
                className={cc([s.control, s.left])}
                onClick={(event) => {
                  event.stopPropagation();
                  setIndex(index - 1);
                }}
                dangerouslySetInnerHTML={{
                  __html: require('src/assets/img/icons/arrow-left-circle.svg?include'),
                }}
              />
            )}
            {gallery && index < imagesCount - 1 && (
              <button
                type="button"
                className={cc([s.control, s.right])}
                onClick={(event) => {
                  event.stopPropagation();
                  setIndex(index + 1);
                }}
                dangerouslySetInnerHTML={{
                  __html: require('src/assets/img/icons/arrow-right-circle.svg?include'),
                }}
              />
            )}
            {React.Children.toArray(children)[index]}
          </div>
        </Portal>
      )}
    </Fragment>
  );
};
