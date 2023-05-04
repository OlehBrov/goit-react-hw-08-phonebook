import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLogOutMutation } from 'redux/authAPI';
import { AppBar, Box, Button, Container, Typography } from '@mui/material';
// const { NavLink } = require('react-router-dom');

export const Header = () => {
  const userName = useSelector(state => state.auth.name);
  const isAuthorized = useSelector(state => state.auth.isAuthorized);
  const [toLogOut] = useLogOutMutation();

  const navigate = useNavigate();

  const logOutHandler = () => {
    toLogOut();
    navigate('/welcome');
  };
  // const handleModalOpen = dispatch(setModal(true));
  return (
    <AppBar position="fixed">
      <StyledContainer>
        {!isAuthorized && (
          <StyledBox>
            
            <Button color="inherit"  type="button" onClick={() => navigate('/login')}>
              LogIn{' '}
            </Button>
            <Button color="inherit"  type="button" onClick={() => navigate('/SignUp')}>
              SignUp{' '}
            </Button>
          </StyledBox>
        )}
        {isAuthorized && (
          <>
            <Typography variant="h3">Hello, {userName} </Typography>{' '}
            <StyledBox>
            <Button color="inherit"  type="button" onClick={() => logOutHandler()}>
              LogOut{' '}
              </Button>
              </StyledBox>
          </>
        )}
      </StyledContainer>
    </AppBar>
  );
};

export const StyledContainer = styled(Container)`
  display: flex;
  padding: 15px 0 15px 0;
`
export const StyledBox = styled(Box)`
  display: flex;
margin-right: 0;
margin-left: auto;
`

export const HeaderContainer = styled.div`
  display: flex;
  max-width: 1200px;
  width: 600px;
  margin: 0 auto;
  align-items: center;
  /* justify-content: center; */
`;

export const HeaderStyled = styled.header`
  background-color: #92afc5;
  display: flex;
  height: 70px;
  width: 100%;
`;

// const ButtonStyled = styled.button`
//   padding: 10px 25px;
//   border-radius: 5px;
//   border: none;
//   background-color: #8ba1ff;
//   box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.75);
// `;
