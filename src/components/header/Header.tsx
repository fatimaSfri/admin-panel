import { AppBar, Box, Toolbar } from "@mui/material";
import AppBrand from "./AppBrand";
import PrimaryNav from "./PrimaryNav";
import ProfileItems from "./LoginItems";
import MenuItems from "./MenuItems";

export default function Header() {
  return (
    <AppBar elevation={0}>
      <Toolbar
        sx={{ alignItems: "center", justifyContent: "center", ml: { lg: -8 } }}
      >
        <Box
          sx={{
            width: { xs: "97%", lg: "85%", xl: "75%" },
            maxWidth: "1140px",
            mx: "auto ",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* app brand */}
          <AppBrand />

          {/* nav items */}
          <PrimaryNav />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center ",
            }}
          >
            {/* userName or  login/register */}
            <ProfileItems />

            {/* menu */}
            <MenuItems />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
