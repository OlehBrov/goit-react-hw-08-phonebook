import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogInMutation } from 'redux/authAPI';
import { useGetAllContactsQuery } from 'redux/contactsAPI';
import styled from 'styled-components';

export const LogIn = () => {
  const navigate = useNavigate();
  const [logInEmail, setSignUpEmail] = useState('');
  const [logInPassword, setLogInPassword] = useState('');
  const [toLogIn] = useLogInMutation();
  
  

  const handleInput = e => {
    if (e.target.name === 'signUpEmail') setSignUpEmail(e.target.value);
    if (e.target.name === 'signUpPassword') setLogInPassword(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    toLogIn({
      email: logInEmail,
      password: logInPassword,
    }).then(()=> navigate('/'));
  };
  return (
    <Backdrop>
      <button type="button" onClick={() => navigate('/')}>
        {' '}
        Close
      </button>
      <Modal>
        <form
          method="post"
          name="login_form"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label>
            Email
            <input
              type="email"
              name="signUpEmail"
              onChange={handleInput}
              value={logInEmail}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="signUpPassword"
              onChange={handleInput}
              value={logInPassword}
            />
          </label>

          <button type="submit">Sign Up</button>
        </form>
      </Modal>
    </Backdrop>
  );
};

const Backdrop = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 17, 17, 0.3);
  backdrop-filter: blur(5px);
  justify-content: center;
  align-items: center;
  top: 0vh;
  left: 0vw;
  /* bottom: 0;
  right: 0; */
  margin: 0 auto;
  z-index: 999;
  /* opacity: 0; */
  /* pointer-events: none; */
  transition: all 0.3s;
`;

const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 400px;
  background-color: beige;
  border: 1px solid black;
`;
