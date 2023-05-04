import { Box, Button, TextField, Typography } from '@mui/material';
import { BackdropView } from 'components/SharedLayout/Backdrop';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogInMutation } from 'redux/authAPI';


export const LogIn = () => {
  const navigate = useNavigate();
  const [logInEmail, setSignUpEmail] = useState('');
  const [logInPassword, setLogInPassword] = useState('');
  const [toLogIn] = useLogInMutation();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (logInEmail && logInPassword !== '') {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [logInEmail, logInPassword]);

  const handleInput = e => {
    if (e.target.name === 'signUpEmail') setSignUpEmail(e.target.value);
    if (e.target.name === 'signUpPassword') setLogInPassword(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    toLogIn({
      email: logInEmail,
      password: logInPassword,
    }).then(() => navigate('/'));
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
          Enter your Email and password below
        </Typography>
        <form
          method="post"
          name="login_form"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            required
            id="email-login"
            label="E-mail"
            name="signUpEmail"
            placeholder="Please enter email"
            onChange={handleInput}
            value={logInEmail}
            fullWidth
            sx={{
              marginBottom: '30px'
            }}
          />
          <TextField
            required
            fullWidth
            type='password'
            id="password-login"
            label="password"
            name="signUpPassword"
            placeholder="Please enter email"
            onChange={handleInput}
            value={logInPassword}
          />

          <Box sx={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '40px',
          }}>
            <Button variant="contained" type="submit" disabled={isDisabled} sx={{
              paddingLeft: '40px',
              paddingRight: '40px'
            }}>
              Log In
            </Button>
            <Button
              variant="outlined"
              type="button"
              sx={{
              paddingLeft: '40px',
              paddingRight: '40px'
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

