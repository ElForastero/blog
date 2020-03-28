import React, { createContext, useReducer, Dispatch } from 'react';

type BookshelfContextType = [{ genre: null | string }, Dispatch<any>];

export const Context = createContext<BookshelfContextType | undefined>(undefined);

export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
const reducer = (state, action) => {
  if (action.type === FILTER_BY_GENRE) {
    return { ...state, genre: action.payload };
  } else {
    return state;
  }
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { genre: null });

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
