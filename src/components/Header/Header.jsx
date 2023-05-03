import styled from 'styled-components';


import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLogOutMutation } from 'redux/authAPI';
// const { NavLink } = require('react-router-dom');

export const Header = () => {
  const userName = useSelector(state => state.auth.name)
  const isAuthorized = useSelector(state => state.auth.isAuthorized)
  const [toLogOut] = useLogOutMutation();

  const navigate = useNavigate()
  
  const logOutHandler = () => {
    toLogOut()
      navigate('/welcome')
  }
  // const handleModalOpen = dispatch(setModal(true));
  return (
    <HeaderStyled>
      <HeaderContainer>
       {!isAuthorized && <> <button type="button" onClick={() => navigate('/login')}>
          LogIn{' '}
        </button>
         <button type="button" onClick={() => navigate('/SignUp')}>
          SignUp{' '}
        </button></>}
        {isAuthorized && <><h3>Hello, {userName} </h3>  <button type="button" onClick={()=>logOutHandler() }>
          LogOut{' '}
        </button></>}
      </HeaderContainer>
    </HeaderStyled>
  );
};

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
