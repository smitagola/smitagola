import { useState, useEffect } from 'react';
import { registerUser } from '../features/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography, Box, Stack, TextField, InputAdornment, IconButton, Button } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector(state => state.user.response);

  const [resMessage, setResMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConPass, setShowConPass] = useState(false);

  const [signUpData, setSignUpData] = useState({
    name: "",
    mail: "",
    password: "",
    conPassword: ""
  });
  const [error, setError] = useState({
    nameError: false,
    mailError: false,
    passwordError: false,
    conPasswordError: false
  });
  const [errorText, setErrorText] = useState({
    nameErrorText: "Please enter your name",
    mailErrorText: "Please enter your email address",
    passwordErrorText: "Please enter your password",
    conPasswordErrorText: "Please re-enter your password"
  });

  useEffect(() => {
    if (message == "User Exist") {
      setResMessage("This email is already has been register please try to login or another email")
    } else if (message == "User Register successfully") {
      navigate("/login");
    }
  }, [message])

  let { mail, password, conPassword, name } = signUpData;
  let { mailError, passwordError, conPasswordError, nameError } = error;
  let { mailErrorText, passwordErrorText, conPasswordErrorText, nameErrorText } = errorText;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
    (resMessage !== "" && setResMessage(""));
  }

  const signUp = () => {
    let checkEmail = mail.includes('@' && '.');
    let lengthOfPass = password.length;

    if (mail == "" && password == "" && conPassword == "") {
      setError({
        mailError: true,
        passwordError: true,
        conPasswordError: true
      });
    } else if (name == "") {
      setError({ ...error, nameError: true })
    } else if (mail == "") {
      setError({ ...error, mailError: true })
    } else if (!checkEmail) {
      setError({ ...error, mailError: true });
      setErrorText({ ...errorText, mailErrorText: "Please enter valid email address" });
    } else if (password == "") {
      setError({ ...error, passwordError: true })
    } else if (conPassword == "") {
      setError({ ...error, conPasswordError: true })
    } else if (lengthOfPass < 4) {
      setError({ ...error, passwordError: true });
      setErrorText({ ...errorText, passwordErrorText: "Password length should not be less than 4 character" });
    } else if (conPassword !== password) {
      setError({ ...error, conPasswordError: true });
      setErrorText({ ...errorText, conPasswordErrorText: "Password doen't match" });
    } else {
      dispatch(registerUser({ name, mail, password }));
      setSignUpData({ mail: "", password: "", conPassword: "", name : "" });
    }
  }

  return (
    <>
      <Container sx={{ padding: 5 }}>
        <Box sx={{ width: "400px", margin: "auto", display: "flex", flexDirection: 'column', gap: 3 }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>Sign Up</Typography>

          <Stack direction="column" gap={2}>
            <TextField 
              type="text"
              variant='outlined'
              label="Name"
              name="name"
              value={name}
              error={nameError}
              helperText={nameError && nameErrorText}
              onFocus={() => setError({...error, nameError : false})}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              type={'email'}
              variant="outlined"
              label="Email Address"
              name={"mail"}
              value={mail}
              error={mailError}
              helperText={mailError && mailErrorText}
              onFocus={() => setError({ ...error, mailError: false })}
              onChange={(e) => handleChange(e)}
            />

            <TextField
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              label="Enter Password"
              name="password"
              value={password}
              error={passwordError}
              helperText={passwordError && passwordErrorText}
              onFocus={() => setError({ ...error, passwordError: false })}
              onChange={(e) => handleChange(e)}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={() => { setShowPassword(showPassword ? false : true) }}>
                    {(showPassword) ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                )
              }}
            />

            <TextField
              type={showConPass ? 'text' : 'password'}
              variant="outlined"
              label="Confirm Password"
              name="conPassword"
              value={conPassword}
              error={conPasswordError}
              helperText={conPasswordError && conPasswordErrorText}
              onFocus={() => setError({ ...error, conPasswordError: false })}
              onChange={(e) => handleChange(e)}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={() => { setShowConPass(showConPass ? false : true) }}>
                    {(showConPass) ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                )
              }}
            />

            <Button variant="contained" size='large' onClick={signUp}>SIGN UP</Button>
            <Typography sx={{ color: "red" }}>{resMessage}</Typography>
          </Stack>
        </Box>
      </Container>
    </>
  )
}

export default SignUp