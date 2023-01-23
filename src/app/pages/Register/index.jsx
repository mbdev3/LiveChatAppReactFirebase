import React from 'react';
import { Helmet } from 'react-helmet-async';
import SharedLayout from './SharedLayout';

export function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>Register Page</title>
        <meta name='Register Page' content='Register Page' />
      </Helmet>

      <SharedLayout />
    </>
  );
}
