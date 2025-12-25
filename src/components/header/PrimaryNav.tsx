import { Box, Button, Stack } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "./navigation";

const PrimaryNav = () => {
  const location = useLocation();

  return (
    <Stack
      direction="row"
      spacing={{ sm: 2, md: "35px" }}
      sx={{ display: { xs: "none", md: "flex" } }}
      alignItems="center"
    >
      {NAV_ITEMS.map((page) => {
        const isActive =
          location.pathname === page.src ||
          location.pathname.startsWith(`${page.src}`);

        return (
          <Link
            to={page.src}
            key={page.name}
            style={{ textDecoration: "none" }}
          >
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                color: "white",
                fontSize: { xs: "14px", lg: "16px" },
                position: "relative",
                textDecoration: "none",
                textTransform: "none",
                p: 0,
                m: 0,
                boxSizing: "border-box",
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
              {isActive ? (
                <Box
                  sx={{
                    minWidth: "8px",
                    minHeight: "8px",
                    borderRadius: "50%",
                    bgcolor: "#40A578",
                    mr: "4px",
                    mt: "4px",
                  }}
                ></Box>
              ) : (
                ""
              )}
              {page.name}
            </Button>
          </Link>
        );
      })}
    </Stack>
  );
};

export default PrimaryNav;
