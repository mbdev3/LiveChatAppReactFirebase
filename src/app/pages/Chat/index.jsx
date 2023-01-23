import React from 'react';
import { Helmet } from 'react-helmet-async';
import SharedLayout from './SharedLayout';

export function ChatPage() {
  return (
    <>
      <Helmet>
        <title>ChatPage</title>
        <meta name='ChatPage' content='ChatPage' />
      </Helmet>

      <SharedLayout />
    </>
  );
}
