import React from 'react';
import Error from 'next/error';

const Error404 = ({ errorCode }) => {
  return <Error statusCode={errorCode} />;
};

export default Error404;
