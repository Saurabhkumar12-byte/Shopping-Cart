import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux'
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Cartdropdown from './Cartdropdown';
import cartSlice from '../store/cart-slice';



export default function Header(props) {
  // const selectcart = ;
  const cart=useSelector(state => state.cart);
  const [clicked, setclicked] = useState(false)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           EComm 
          </Typography>
          <Badge badgeContent={cart.length} color="warning" sx={{marginRight:"18px"}}>
            <ShoppingCartIcon sx={{position:"relative"}} onClick={()=>setclicked((prev)=>!prev)}>
              
            </ShoppingCartIcon>
            {cart.length>0 && <Cartdropdown  clicked={clicked}></Cartdropdown>}
          </Badge>
          <Button color="inherit">Login </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
