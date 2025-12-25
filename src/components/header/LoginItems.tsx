import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import vector from "../../assets/img/Vector.svg";
import { useInfoSelector } from "../../store/hooks";


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
      <Box component="img" src={vector} alt="icon" sx={{mr:"13px" }} />

      {userName ? (
        <Link to="dashboard" style={{ textDecoration: 'none' }}>
        <Typography
          sx={{
            color: "white",
            fontSize: "16px",
            textTransform: "none",
          }}
        >
          {userName}
        </Typography>
        </Link>
      ) : (
        <Link to="/auth/login" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              transition: "transform 0.3s cubic-bezier(0.7, -0.4, 0.4, 1.4)",
              "&:hover": {
                transform: "scale(1.05)",
              },
              "&:active": {
                transform: "scale(0.98)",
              },
            }}
          >
            Login / Register
          </Typography>
        </Link>
      )}
    </Box>
  );
};

export default ProfileItems;