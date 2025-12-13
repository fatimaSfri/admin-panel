import { Box } from "@mui/material";
import SidebarMenu from "./SidebarMenu";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <Box
      sx={{
        maxWidth:{xs:"850px" , lg:"1140px"},
        boxSizing: "border-box",
        width: { xs: "94%", md: "100%" },
        mx: "auto",
        mt: "140px",
        mb:"48px",
        minHeight: "100vh",
        display: "flex",
        flexDirection:{xs:"column" ,lg:"row"},
        gap: "20px",
        overflow:"auto"
      }}
    >
      {/* left box */}
      <SidebarMenu />

      {/* right box */}
      <Box
        sx={{
          maxWidth:{md:"850px"},
          boxSizing: "border-box",
          width: "100%" ,
          borderRadius: "20px",
          backgroundColor: "rgba(250, 250, 250, 0.025)",
          backdropFilter: "blur(20px)",
          mx:{xs:"auto"},
          padding:"20px 16px 27px 22px",
          }}
      >
       {/* <TableBox/> */}
       <Outlet/>
      </Box>
    </Box>
  );
};

export default Dashboard;
