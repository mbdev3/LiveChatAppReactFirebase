import * as React from 'react';
import { lazyLoad } from '../../../utils/Loadable';
import { LoadingIndicator } from '../../../app/components/LoadingIndicator';
import styled from 'styled-components/macro';

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChatPage = lazyLoad(
  () => import('./index'),
  (module) => module.ChatPage,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  }
);

export default ChatPage;
