import React from 'react';
import Error from 'next/error';

const CustomErrorPage = ({ errorCode }) => {
  return <Error statusCode={errorCode} />;
};

export default CustomErrorPage;
