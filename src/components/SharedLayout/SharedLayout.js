import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from 'components/Header/Header';
import { Container } from '@mui/material';

const SharedLayout = () => {
  return (
    <>
      <StyledContainer maxWidth="sm">

        <Header />
      </StyledContainer>

      <StyledContainer fixed>

        <Suspense>
          <Outlet />
        </Suspense>
      </StyledContainer>

    </>
  );
};

export default SharedLayout;

const StyledContainer = styled(Container)`
  display: flex;
margin-top: 60px;
  padding: 10px 15px;
`;
