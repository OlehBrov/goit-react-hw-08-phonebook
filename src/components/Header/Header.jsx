import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { setModal } from 'redux/ModalSlice';
// const { NavLink } = require('react-router-dom');

export const Header = () => {
  const dispatch = useDispatch();
  // const handleModalOpen = dispatch(setModal(true));
  return (
    <HeaderStyled>
      <HeaderContainer>
        <button type="button" onClick={() => dispatch(setModal(true))}>
          LogIn{' '}
        </button>
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
