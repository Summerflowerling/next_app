'use client';
import React from 'react';

interface Props {
  error: Error;
}

const ErrorPage = ({ error }: Props) => {
  console.log('error:', error);
  return <div>Unexpected error has occurred</div>;
};

export default ErrorPage;
