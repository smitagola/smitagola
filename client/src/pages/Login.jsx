import { useState, useEffect } from 'react';
import { Container, Typography, Box, Stack, TextField, InputAdornment, IconButton, Button } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector(state => state.user.isLoggedIn);

  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    mail: "",
    password: ""
  });

  const [error, setError] = useState({
    mailError: false,
    passwordError: false
  });

  const [errorText, setErrorText] = useState({
    mailErrorText: "Please enter your email address",
    passwordErrorText: "Please enter your password"
  });

  let { mail, password } = loginData;
  let { mailError, passwordError } = error;
  let { mailErrorText, passwordErrorText } = errorText;

  useEffect(() => {
    (loggedIn && navigate("/books"));
  }, [loggedIn])

  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  const logIn = () => {
    let checkEmail = mail.includes('@' && '.');
    if (mail == "" && password == "") {
      setError({
        mailError: true,
        passwordError: true
      });
    } else if (mail == "") {
      setError({ ...error, mailError: true });
    } else if(!checkEmail){
      setError({ ...error, mailError: true });
      setErrorText({ ...errorText, mailErrorText: "Please enter valid email address" })
    } else if (password == "") {
      setError({ ...error, passwordError: true });
    } else {
      dispatch(loginUser(loginData))
    }
  }
  return (
    <>
      <Container sx={{ padding: 5 }}>
        <Box sx={{ width: "400px", margin: "auto", display: "flex", flexDirection: 'column', gap: 3 }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>Log In</Typography>

          <Stack direction="column" gap={2}>
            <TextField
              type={'email'}
              variant="outlined"
              label="Email Address"
              name="mail"
              value={mail}
              onChange={(e) => handleChange(e)}
              onFocus={() => setError({ ...error, mailError: false })}
              error={mailError}
              helperText={mailError && mailErrorText}
            />

            <TextField
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              label="Enter Password"
              name="password"
              value={password}
              onChange={(e) => handleChange(e)}
              onFocus={() => setError({ ...error, passwordError: false })}
              error={passwordError}
              helperText={passwordError && passwordErrorText}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={() => { setShowPassword(showPassword ? false : true) }}>
                    {(showPassword) ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                )
              }}
            />

            <Button variant="contained" size='large' onClick={logIn}>Log in</Button>
          </Stack>
        </Box>
      </Container>
    </>
  )
}

export default Login