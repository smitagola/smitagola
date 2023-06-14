import React from 'react';
import { Box, Button, Divider, Paper, Stack, Typography, useMediaQuery, useTheme, Drawer, IconButton, styled, List, ListItem } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import img from "../biography/img-1.jpg";
import CartCard from '../component/DetailsCard/CartCard';
import { DetailsCard } from '../component/DetailsCard/DetailsCard';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Cart = (props) => {
  let { open, close } = props;
  const theme = useTheme();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.cartBookDetails);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const mediumSize = useMediaQuery(theme.breakpoints.down('md'));

  const cartButton = {
    backgroundColor: "#edf2fe",
    border: "none",
    outline: 0,
    fontWeight: "500",
    height: "50px",
    "&:hover": {
      backgroundColor: '#4d7df2',
      color: "white"
    }
  }

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "4px 10px"
  }))
  return (
    <>
      <Drawer
        open={open}
        sx={{
          width: 600,
          '& .MuiDrawer-paper': {
            width: 470,
          }
        }}
        anchor="right"
        onClose={close}
      >
        <DrawerHeader>
          <Typography sx={{ fontSize: "17px" }}>Cart</Typography>
          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>

        {
          (cartItems.length !== 0) ? (
            <>
              <List>
                {
                  cartItems && cartItems.map(item => {
                    return (
                      <>
                        <ListItem>
                          <CartCard bookname={item.BookName} bookprice={item.BookPrice} bookauthor={item.AuthorName} bookcategory={item.CategoryName} img={item.BookImage} units={item.units} isbnNumber={item.BookISBNNumber} />
                        </ListItem>
                      </>
                    )
                  })
                }
              </List>

              <Divider />
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", m: 1, p: 1 }}>
                <ListItem sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>Total :</Typography>
                  <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>₹{totalPrice}</Typography>
                </ListItem>
                <Button variant="contained" onClick={() => { navigate("/payment-options"); close(); }}>Proceed to payment</Button>
              </Box>
            </>
          ) : (
            <Typography sx={{ textAlign : "center", marginTop : "10px"}} variant="h5">Your Cart is Empty!</Typography>
          )
        }



      </Drawer>
    </>
  )
}

export default Cart