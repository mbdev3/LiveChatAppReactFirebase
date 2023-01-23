import React from 'react';
import { Helmet } from 'react-helmet-async';
import SharedLayout from './SharedLayout';

export function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login Page</title>
        <meta name='Login Page' content='Login Page' />
      </Helmet>

      <SharedLayout />
    </>
  );
}
