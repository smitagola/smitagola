import React from 'react';
import { Stack, Paper, Button, TextField, Radio, RadioGroup, Box, styled, FormControl, FormControlLabel, FormLabel, Select, MenuItem, InputLabel, Typography, useMediaQuery, useTheme } from "@mui/material";

const ProductForm = () => {
    const theme = useTheme();
    const mediumSize = useMediaQuery(theme.breakpoints.down('md'));
    const Item = styled(Box)(({ theme }) => ({
        margin: "0px 5px",
        width: "100%",
        maxWidth: "450px"
    }));

    return (
        <>
            <Paper sx={{ margin: "20px auto", width: "80%" }}>
                <Box sx={{ padding: "5px 30px" }}>
                    <Typography variant="h5" gutterBottom={true}>Book Details</Typography>
                    <Stack direction={mediumSize ? "column" : "row"}>
                        <Item>
                            <TextField margin="dense" size="normal" label="Book Name" placeholder='Elon Musk' InputLabelProps={{ shrink: true }} variant="standard" sx={{ width: "100%" }} />
                        </Item>

                        <Item>
                            <TextField margin="dense" size="normal" label="ISBN Number" placeholder='123456789874' InputLabelProps={{ shrink: true }} variant="standard" sx={{ width: "100%" }} />
                        </Item>
                    </Stack>

                    <Stack direction={mediumSize ? "column" : "row"}>
                        <Item>
                            <TextField margin="dense" size="normal" label="Book Price" placeholder='₹1000.05' InputLabelProps={{ shrink: true }} variant="standard" sx={{ width: "100%" }} />
                        </Item>

                        <Item>
                            <TextField margin="dense" size="normal" label="Auther Name" placeholder='Chetan Bhagat' InputLabelProps={{ shrink: true }} variant="standard" sx={{ width: "100%" }} />
                        </Item>
                    </Stack>

                    <Stack direction={mediumSize ? "column" : "row"}>
                        <Item>
                            <TextField margin="dense" size="normal" label="Publisher Name" placeholder='McGraw Hill' InputLabelProps={{ shrink: true }} variant="standard" sx={{ width: "100%" }} />
                        </Item>

                        <Item>
                            <TextField margin="dense" type="number" size="normal" label="Edition" placeholder='1st Edition' InputLabelProps={{ shrink: true }} variant="standard" sx={{ width: "100%" }} />
                        </Item>
                    </Stack>

                    <Stack direction={mediumSize ? "column" : "row"} >
                        <Item>
                            <FormControl variant="standard" sx={{ width: "100%", marginTop: 1 }}>
                                <InputLabel InputLabelProps={{ shrink: true }}>Category</InputLabel>
                                <Select defaultValue={"Self-Improvement"}>
                                    <MenuItem value="Self-Improvement">Self-Improvement</MenuItem>
                                    <MenuItem value="Biography">Biography</MenuItem>
                                    <MenuItem value="Story">Story</MenuItem>
                                    <MenuItem value="Crime">Crime</MenuItem>
                                </Select>
                            </FormControl>
                        </Item>

                        <Item>
                        <TextField margin="dense" ssize="normal" label="Image Link" placeholder='https://abc.com' InputLabelProps={{ shrink: true }} variant="standard" sx={{ width: "100%" }} />
                        </Item>
                    </Stack>
                </Box>

                <Box sx={{ margin: "5px 0px 10px 18px", padding: 2 }}>
                    <Button variant="contained" sx={{ width: "250px" }} size="large">Add new Book</Button>
                </Box>
            </Paper>
        </>
    )
}

export default ProductForm