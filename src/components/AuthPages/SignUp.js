import { Box, Button, TextField, Typography } from '@mui/material';
import { BackdropView } from 'components/SharedLayout/Backdrop';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignUpMutation } from 'redux/authAPI';


export const ModalSignUp = () => {
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [toSignUp] = useSignUpMutation();
  const navigate = useNavigate();
  useEffect(() => {
    if (signUpName && signUpEmail && signUpPassword !== '') {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [signUpEmail, signUpName, signUpPassword]);
  const handleInput = e => {
    if (e.target.name === 'signUpName') setSignUpName(e.target.value);
    if (e.target.name === 'signUpEmail') setSignUpEmail(e.target.value);
    if (e.target.name === 'signUpPassword') setSignUpPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    toSignUp({
      name: signUpName,
      email: signUpEmail,
      password: signUpPassword,
    }).unwrap().then(navigate('/login'));
  };

  return (
    <BackdropView>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            marginBottom: '10px',
          }}
        >
          Enter your Name, Email and password to Sign Up
        </Typography>
        <form
          method="post"
          name="signup_form"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            required
            id="name-signup"
            label="Name"
            name="signUpName"
            placeholder="Please enter name"
            onChange={handleInput}
            value={signUpName}
            fullWidth
            sx={{
              marginBottom: '30px',
            }}
          />
         
          <TextField
            required
            id="email-signup"
            label="Email"
            name="signUpEmail"
            placeholder="Please enter Email"
            onChange={handleInput}
            value={signUpEmail}
            fullWidth
            sx={{
              marginBottom: '30px',
            }}
          />
         
          <TextField
            required
            type="password"
            id="password-signup"
            label="Password"
            name="signUpPassword"
            placeholder="Please enter Password"
            onChange={handleInput}
            value={signUpPassword}
            fullWidth
          />
         
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '40px',
            }}
          >
            <Button
              variant="contained"
              type="submit"
              disabled={isDisabled}
              sx={{
                paddingLeft: '40px',
                paddingRight: '40px',
              }}
              onClick={(e)=>handleSubmit(e)}
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              type="button"
              sx={{
                paddingLeft: '40px',
                paddingRight: '40px',
              }}
              onClick={() => navigate('/')}
            >
              Close
            </Button>
          </Box>
        </form>
      </Box>
    </BackdropView>
  );
};
