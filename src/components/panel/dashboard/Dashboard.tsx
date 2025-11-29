import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import {DashboardIcon} from "./Icon"

const Dashboard = () => {
  return (
    <Box
      sx={{
        maxWidth: "1140px",
        width: "100%",
        border: "2px solid red",
        mx: "auto",
        mt: "140px",
        height: "100vh",
        display: "flex",
        gap: "20px",
      }}
    >
      {/* left box */}
      <Box
        sx={{
          maxWidth: "270px",
          width: "100%",
          height: "294px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          borderRadius: "20px",
          backgroundColor: "rgba(250, 250, 250, 0.025)",
          backdropFilter: "blur(20px)",
          padding: "38px 73px 45px 32px",
        }}
      >
        {/* <Box sx={{display:"flex",
                    gap:"13px",
                    width:"100%",
                    border:"2px solid red",
                    alignItems:"center"
                }}>
                 <Box component="img"
                  src="../../../../src/assets/img/dashboard-icon.svg"
                   sx={{width:"18px",
                    height:"18px"
                   }}/>
                   <Typography
                   sx={{}}>
                    Dashboard
                   </Typography>
                </Box> */}
        <ToggleButtonGroup
          orientation="vertical"
          value=""
          exclusive
          sx={{
            display: "flex",
            textAlign: "left",
            width: "100%",
            border: "2px solid red",
            alignItems: "flex-start",
            "& .MuiToggleButtonGroup-grouped": {
              border: "none",
              backgroundColor: "transparent !important",
              padding: "0",
              "&:hover": {
                backgroundColor: "transparent !important",
              },
              "&.Mui-selected": {
                backgroundColor: "transparent !important",
                color: "white",
              },
            },
          }}
        >
          <ToggleButton
            disableRipple
            value=""
            selected={true}
            sx={{
              display: "flex",
              gap: "13px",
              width: "100%",
              border: "2px solid pink",
              justifyContent: "flex-start",
              "&:hover": {
                background: "none",
                fontFamily:"NiramitSemiBold"
              },
              
            }}
          >
          <DashboardIcon/>
            Dashboard
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {/* right box */}
      <Box> </Box>
    </Box>
  );
};

export default Dashboard;
