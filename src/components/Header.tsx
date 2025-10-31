// import {Box, AppBar, Toolbar } from "@mui/material"
// import Button from '@mui/material/Button';
// import ListSubheader from '@mui/material/ListSubheader';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { styled } from '@mui/material/styles';
// import { useState } from "react";

// const StyledListHeader = styled(ListSubheader)({
//   backgroundImage: 'var(--Paper-overlay)',
// });

// export default function GroupedMenu() {
//   const [anchorEl, setAnchorEl] =useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     // appbar box iconbutton menu  menuitem Typography
//     <AppBar sx={{border:"2px red solid"  }} position="static" elevation={0}>
//       <Toolbar sx={{border:"2px red solid" }} >
//       <Box>
//       <Button
//         id="basic-button"
//         aria-controls={open ? 'grouped-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//       >
//         Dashboard
//       </Button>
//       <Menu
//         id="grouped-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         slotProps={{
//           list: {
//             'aria-labelledby': 'basic-button',
//             sx: {
//               py: 0,
//             },
//           },
//         }}
//       >
//         <StyledListHeader>Category 1</StyledListHeader>
//         <MenuItem onClick={handleClose}>Option 1</MenuItem>
//         <MenuItem onClick={handleClose}>Option 2</MenuItem>
//         <StyledListHeader>Category 2</StyledListHeader>
//         <MenuItem onClick={handleClose}>Option 3</MenuItem>
//         <MenuItem onClick={handleClose}>Option 4</MenuItem>
//       </Menu>
//     </Box>
//       </Toolbar>
//     </AppBar>
//   )
// }


import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box , Menu , MenuItem, Toolbar , Button , Stack ,Typography ,CardMedia} from '@mui/material';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

const pages = [
  'Home',
  'About Us',
  'Contact Us',
  'Blog',
  'FAQ',
];

const page = [
  'Login',
  'Register',
];
export default function Header() {
  const [anchorEl, setAnchorEl] =useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar elevation={0}>
      <Toolbar sx={{alignItems:'center' ,justifyContent:'space-between'}} >
      <Stack
      direction="row"
      spacing={1} 
      alignItems="center" 
      sx={{
        padding: 2, 
      }}
    >
        <CardMedia
        component="img"
        sx={{
          width: { xs: 40, lg: 68 }, 
          height: 'auto', 
        }}
        src="../../src/assets/img/logo.svg"
        alt=" logo" 
       />
      <Typography
        sx={{
          fontFamily: 'Russo One, sans-serif', 
          fontWeight: 400, 
          fontStyle: 'normal', 
          fontSize:  { xs: 16, lg: 20 }, 
          lineHeight: '100%', 
          letterSpacing: '20%', 
          background: 'linear-gradient(89.99deg, #1D8D94 30.54%, #99D9A6 99.99%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent', 
          leadingTrim: 'none',
        }}
      >
        PMUSDT.COM
      </Typography>
    </Stack>
      <Stack
    direction={'row'}
    sx={{display:{xs:'none' , md:'flex'}}}
    spacing={3}
    alignItems="center"
  >
    {pages.map((page) => (
      <Button
        key={page}
        sx={{ 
          color: 'white', 
          fontSize: '16px', 
          position: 'relative',
          textDecoration: 'none', 
          '&::after': {
            content: '""', 
            position: 'absolute',
            bottom: 0,
            left: 0, 
            width: '100%', 
            height: '2px', 
            backgroundColor: 'white', 
            transform: 'scaleX(0)', 
            transition: 'transform 0.5s ease-in-out', 
            transformOrigin: 'left center',
          },
          '&:hover::after': {
            transform: 'scaleX(1)'}
        }}
      >
        {page}
      </Button>
    ))}
  </Stack>
   
    <Box
      sx={{ display:'flex' ,justifyContent:'center', alignItems:'center '  }}>
     
         <AccountBoxOutlinedIcon sx={{ borderRadius: 20 , color: 'inherit', mr: 0.5 }} />
        {page.map((page, index) => (
          <Box key={page}  sx={{ display:'flex'  ,justifyContent:'center', alignItems:'center '  }} > 
            <Button
              sx={{ 
                color: 'white', 
                fontSize: '16px', 
                 textDecoration: 'none',
                textTransform: 'none',
                display: 'flex',
                alignItems: 'center',
                minWidth: 'auto',
              }}
            >
              {page}
            </Button>
            {index === 0 && ( 
              <Typography variant="body2" sx={{ color: 'white', }}>
                /
              </Typography>
            )}
          
          </Box>
        ))}
   <Box sx={{display:{xs:'flex' , md:'none'}}} >
      <IconButton
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{color:'white'}}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: 48 * 4.5,
              width: '20ch',
            },
          },
          list: {
            'aria-labelledby': 'long-button',
          },
        }}
      >
        {pages.map((option) => (
          <MenuItem key={option} selected={option === 'Home'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
    </Box>

    </Toolbar>
    </AppBar>
  );
}
