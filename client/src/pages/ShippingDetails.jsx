import { useState } from 'react';
import { SHIPPING_DETAILS, SHIPPING_ERROR, SHIPPING_ERROR_TEXT } from '../constant/Constant';
import { Stack, Paper, Button, TextField, Radio, RadioGroup, Box, styled, FormControl, FormControlLabel, FormLabel, Select, MenuItem, InputLabel, Typography, useMediaQuery, useTheme } from "@mui/material";

const ShippingDetails = () => {
    const theme = useTheme();
    const mediumSize = useMediaQuery(theme.breakpoints.down('md'));
    const Item = styled(Box)(({ theme }) => ({
        margin: "0px 5px",
        width: "100%",
        maxWidth: "450px"
    }));

    const [shippingData, setShippingData] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        flatNo: "",
        societyName: "",
        streetName: "",
        pinCode: 0,
        city: "",
        street: ""
    });
    const [shippingError, setShippingError] = useState(SHIPPING_ERROR);
    const [shippingErrorText, setShippingErrorText] = useState(SHIPPING_ERROR_TEXT);

    const { firstName, lastName, gender, email, flatNo, societyName, streetName, pinCode, city, street } = shippingData;
    const { firstNameError, lastNameError, genderError, emailError, flatNoError, societyNameError, streetNameError, pinCodeError, cityError, stateError } = shippingError;
    const { firstNameText, lastNameText, genderText, emailText, flatText, societyText, streetText, pinCodeText, cityText, stateText } = shippingErrorText;

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        setShippingData({ ...shippingData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Paper sx={{ margin: "20px auto", width: "60%" }}>
                <Box sx={{ padding: "5px 30px" }}>
                    <Typography variant="h5" gutterBottom={true}>Shipping Details</Typography>
                    <Stack direction={mediumSize ? "column" : "row"}>
                        <Item>
                            <TextField
                                type="text"
                                name='firstName'
                                value={firstName}
                                error={firstNameError}
                                onChange={handleChange}
                                helperText={firstNameError && firstNameText}
                                label="First Name"
                                placeholder='John'
                                sx={{ width: "100%" }}
                            />
                        </Item>

                        <Item>
                            <TextField margin="dense" name="lastName" size="normal" label="Last Name" placeholder='doe' InputLabelProps={{ shrink: true }} variant="standard" sx={{ width: "100%" }} />
                        </Item>
                    </Stack>

                    <Stack direction={mediumSize ? "column" : "row"}>
                        <Item>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup row>
                                <FormControlLabel value="male" label="Male" control={<Radio />} />
                                <FormControlLabel value="female" label="Female" control={<Radio />} />
                            </RadioGroup>
                        </Item>

                        <Item>
                            <TextField margin="dense" size="normal" label="Email" placeholder='johndoe@yahoo.co' variant="standard" sx={{ width: "100%" }} name="email" value={email} onChange={(e) => handleChange(e)} />
                        </Item>
                    </Stack>

                    <Stack direction={mediumSize ? "column" : "row"}>
                        <Item>
                            <TextField margin="dense" size="normal" label="Flat No" placeholder='A-31' InputLabelProps={{ shrink: true }} variant="standard" sx={{ width: "100%" }} />
                        </Item>

                        <Item>
                            <TextField margin="dense" size="normal" label="Society Name" placeholder='Sunrise Appartment' InputLabelProps={{ shrink: true }} variant="standard" sx={{ width: "100%" }} />
                        </Item>
                    </Stack>

                    <Stack direction={mediumSize ? "column" : "row"}>
                        <Item>
                            <TextField margin="dense" size="normal" label="Street Name/Landmark" placeholder='Tower' InputLabelProps={{ shrink: true }} variant="standard" sx={{ width: "100%" }} />
                        </Item>

                        <Item>
                            <TextField margin="dense" type="number" size="normal" label="PINCODE" placeholder='356 256' InputLabelProps={{ shrink: true }} variant="standard" sx={{ width: "100%" }} />
                        </Item>
                    </Stack>

                    <Stack direction={mediumSize ? "column" : "row"} >
                        <Item>
                            <FormControl variant="standard" sx={{ width: "100%", marginTop: 1 }}>
                                <InputLabel InputLabelProps={{ shrink: true }}>City</InputLabel>
                                <Select defaultValue={"Ahmedabad"}>
                                    <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
                                    <MenuItem value="Surat">Surat</MenuItem>
                                    <MenuItem value="Baroda">Baroda</MenuItem>
                                    <MenuItem value="Rajkot">Rajkot</MenuItem>
                                </Select>
                            </FormControl>
                        </Item>

                        <Item>
                            <FormControl variant="standard" sx={{ width: "100%", marginTop: 1 }}>
                                <InputLabel InputLabelProps={{ shrink: true }}>State</InputLabel>
                                <Select defaultValue={"Gujrat"}>
                                    <MenuItem value="Gujrat">Gujrat</MenuItem>
                                    <MenuItem value="Rajsthan">Rajsthan</MenuItem>
                                    <MenuItem value="Maharastra">Maharastra</MenuItem>
                                    <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
                                </Select>
                            </FormControl>
                        </Item>
                    </Stack>
                </Box>

                <Box sx={{ margin: "5px 0px 10px 18px", padding: 2 }}>
                    <Button variant="contained" sx={{ width: "250px" }} size="large">Proceed to payment</Button>
                </Box>
            </Paper>
        </>
    )
}

export default ShippingDetails