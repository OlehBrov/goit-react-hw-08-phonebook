import { useState } from 'react';
import { useSignUpMutation } from 'redux/authAPI';
import styled from 'styled-components';

export const ModalSignUp = () => {
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [toSignUp, result] = useSignUpMutation();

  const handleInput = e => {
    
    if (e.target.name === 'signUpName') setSignUpName(e.target.value);
    if (e.target.name === 'signUpEmail') setSignUpEmail(e.target.value);
    if (e.target.name === 'signUpPassword') setSignUpPassword(e.target.value);
  };

    const handleSubmit = e => {
        e.preventDefault()
        toSignUp({
            name: signUpName,
            email: signUpEmail,
            password: signUpPassword,
      })

  };

  return (
      <Backdrop>
          <Modal>
      <form method = "post" name="signup_form" autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="signUpName" onChange={handleInput} value={signUpName}/>
        </label>
        <label>
          Email
          <input type="email" name="signUpEmail" onChange={handleInput} value={signUpEmail} />
        </label>

        <label>
          Password
          <input type="password" name="signUpPassword" onChange={handleInput} value={signUpPassword}/>
        </label>

        <button type="submit">Sign Up</button>
              </form>
              </Modal>
    </Backdrop>
  );
};

const Backdrop = styled.div`
position: absolute;
width: 100%;
height: 100%;
overflow: hidden;
backdrop-filter: blur(10px);`

const Modal = styled.div`
background-color: white;
display: flex;
width: 300px;

`