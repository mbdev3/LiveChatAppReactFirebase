import * as React from 'react';
import { lazyLoad } from '../../../utils/Loadable';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import styled from 'styled-components/macro';

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterPage = lazyLoad(
  () => import('./index'),
  (module) => module.RegisterPage,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  }
);

export default RegisterPage;
