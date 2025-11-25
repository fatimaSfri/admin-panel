import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import vector from "../../assets/img/Vector.svg";
import { useInfoSelector } from "../../store/hooks";
import { LOGIN_ITEMS } from "./navigation";

const ProfileItems = () => {
  const userName = useInfoSelector((state) =>
    state.user.items.length > 0
      ? state.user.items[state.user.items.length - 1].userName
      : ""
  );
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        visibility: { xs: "hidden", sm: "visible" },
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
          {LOGIN_ITEMS.map((page, index) => (
            <Box
              key={page.name}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to={page.src} style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    color: "white",
                    fontSize: "16px",
                    textDecoration: "none",
                    textTransform: "none",
                    display: "flex",
                    alignItems: "center",
                    minWidth: "auto",
                    underline: "none",
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
        </>
      )}
    </Box>
  );
};

export default ProfileItems;
