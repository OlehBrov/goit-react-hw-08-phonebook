import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <StyledContainer>
        <Header />
      </StyledContainer>
      <StyledContainer>
        <Suspense>
          <Outlet />
        </Suspense>
      </StyledContainer>
    </>
  );
};

export default SharedLayout;

const StyledContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  padding: 10px 15px;
`;
