import { useState } from 'react';
import { CustomerTable, OrderTable, PaymentTable, ProductTable, Dashboard, ProductForm } from "./Component";
import { Box, AppBar, Toolbar, Typography, styled, useTheme, Hidden, IconButton } from "@mui/material";
import { Route, Routes } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Component/SideBar/Sidebar';


const drawerWidth = 200;
const AdminPanel = () => {
  const [component, setComponent] = useState(<CustomerTable />);
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleClick = () => { setOpen(!open) }

  const ComponentContainer = styled(Box)(({ theme }) => ({
    border: "1px solid black",
    position: "relative",
    left: 50,
    top: 100,
    width: "78%",
  }));

  const BoxComponent = {
    padding: "50px 39px",
    background: "#f5f5f5",
    width: "100%",
    height: "1000%"
  }

  return (
    <>
      <Box sx={{ height: "100%", display: "flex" }}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h6" noWrap component="div">BookMart</Typography>

            <Hidden mdUp={true}>
              <IconButton sx={{ color : "white"}}>
                <MenuIcon  />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>

        <Sidebar />

        <Box sx={BoxComponent}>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="inventory-table" element={<ProductTable />} />
            <Route path="new-product" element={<ProductForm />} />
            <Route path="customer-table" element={<CustomerTable />} />
            <Route path="payment-table" element={<PaymentTable />} />
            <Route path="order-table" element={<OrderTable />} />
          </Routes>
        </Box>
      </Box>
    </>
  )
}

export default AdminPanel