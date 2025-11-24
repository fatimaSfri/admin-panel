import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PMUSDT from '../assets/img/logo.png';
import vector from '../assets/img/Vector.svg'
import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Button,
  Stack,
  Typography,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useInfoSelector } from "../store/hooks";

const pages =
 [{name:"Home" , src:"/home"} , 
  {name:"About Us", src:"#"},
  {name:"Contact Us" , src:"#"},
  {name:"Blog" , src:"#" },
  {name:"FAQ" , src:"#"}];

const Logins = [
  { name: "Login", src: "/auth/login" },
  { name: "Register", src: "/auth/register" },
];
export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
   
  const userName= useInfoSelector((state)=> state.user.items.length > 0 
    ? state.user.items[state.user.items.length - 1].userName 
    : "")

  return (
    <AppBar elevation={0}>
      <Toolbar sx={{ alignItems: "center", justifyContent: "center" , ml:{lg:-8}}}>
        <Box
          sx={{
            width: { xs: "97%", lg: "85%", xl: "75%" },
            mx: "auto ",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            sx={{
              padding: 2,
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: { xs: 40, lg: 56 , xl:68 },
                height: "auto",
              }}
              src={PMUSDT}
              alt=" logo"
            />
            <Typography
              sx={{
                fontFamily: "Russo One, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: { xs: 16, lg: 20 },
                lineHeight: "100%",
                letterSpacing: "20%",
                background:"linear-gradient(89.99deg, #1D8D94 30.54%, #99D9A6 99.99%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                leadingTrim: "none",
              }}
            >
              PMUSDT.COM
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
            sx={{ display: { xs: "none", md: "flex" }}}
            alignItems="center"
          >
            {pages.map((page) => (
            <Link to={page.src}  key={page.name} >
              <Button
                sx={{
                  color: "white",
                  fontSize: { xs: "14px", lg: "16px" },
                  position: "relative",
                  textDecoration: "none",
                  textTransform: "none",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "white",
                    transform: "scaleX(0)",
                    transition: "transform 0.5s ease-in-out",
                    transformOrigin: "left center",
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                  },
                }}
              >
                {page.name}
              </Button>
             </Link>
            ))}
          </Stack>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center ",
            }}
          >
            {/* <Box component="img" src={vector} alt="icon" sx={{mr: 0.5}} />
            {Logins.map((page, index) => (
              <Box
                key={page.name}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center ",
                }}
              >
                <Link to={page.src}>
                  <Button
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      textDecoration: "none",
                      textTransform: "none",
                      display: "flex",
                      alignItems: "center",
                      minWidth: "auto",
                      transition:
                        "transform 0.3s cubic-bezier(0.7, -0.4, 0.4, 1.4)",

                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                      "&:active": {
                        transform: "scale(0.98)",
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
                {index === 0 && (
                  <Typography variant="body2" sx={{ color: "white" }}>
                    /
                  </Typography>
                )}
              </Box>
            ))}
 */}
<Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Box component="img" src={vector} alt="icon" sx={{ mr: 0.5 }} />

  {userName ? (
  
    <Typography
      sx={{
        color: "white",
        fontSize: "16px",
        textTransform: "none",
      }}
    >
      {userName}
    </Typography>
  ) : (
    
    <>
      {Logins.map((page, index) => (
        <Box
          key={page.name}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to={page.src}>
            <Button
              sx={{
                color: "white",
                fontSize: "16px",
                textDecoration: "none",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                minWidth: "auto",
                transition: "transform 0.3s cubic-bezier(0.7, -0.4, 0.4, 1.4)",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                "&:active": {
                  transform: "scale(0.98)",
                },
              }}
            >
              {page.name}
            </Button>
          </Link>

          {/* دقیقاً مثل کد خودت: فقط بعد از اولین آیتم */}
          {index === 0 && (
            <Typography variant="body2" sx={{ color: "white" }}>
              /
            </Typography>
          )}
        </Box>
      ))}
    </>
  )}
</Box>
            
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                sx={{ color: "white" }}
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
                      width: "20ch",
                    },
                  },
                  list: {
                    "aria-labelledby": "long-button",
                  },
                }}
              >
                {pages.map((option) => (
                  <MenuItem
                    key={option.name}
                    selected={option.name === "Home"}
                    onClick={handleClose}
                  >
                    {option.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
