import { Box, IconButton, MenuItem , Menu } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { MENU_ITEMS } from "./navigation";
import { useLocation } from "react-router-dom";

const MenuItems = () => {
const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
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
            sx: {
              maxHeight: 48 * 4.5,
              width: "20ch",
              backgroundColor: "#242C39",
              backgroundImage: "none",
              boxShadow: "0px 8px 32px rgba(0,0,0,0.4)",
              borderRadius: 2,
              mt: 1,
            },
          },
        }}
        MenuListProps={{
          sx: {
            py: 0,
            "& .MuiMenuItem-root": {
              color: "#ffffff",
              fontSize: "0.95rem",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
              "&.Mui-selected": {
                backgroundColor: "rgba(255, 255, 255, 0.16)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              },
            },
            "& a": {
              textDecoration: "none",
              color: "inherit",
            },
          },
        }}
      >
        {MENU_ITEMS.map((option) => (
          <Link
            key={option.name}
            to={option.src}
            style={{ textDecoration: "none" }}
          >
            <MenuItem
              selected={
                option.src !== "#" && location.pathname.includes(option.src)
              }
              onClick={handleClose}
            >
              {option.name}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Box>
  );
};

export default MenuItems;
