import { Box } from "@mui/material";
import SidebarMenu from "./SidebarMenu";
import TableBox from "./TableBox"

const Dashboard = () => {
  return (
    <Box
      sx={{
        maxWidth: "1140px",
        boxSizing: "border-box",
        width: { xs: "94%", md: "100%" },
        border: "2px solid red",
        mx: "auto",
        mt: "140px",
        height: "100vh",
        display: "flex",
        flexDirection:{xs:"column" ,md:"row"},
        gap: "20px",
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
          border: "2px solid red",
          borderRadius: "20px",
          backgroundColor: "rgba(250, 250, 250, 0.025)",
          backdropFilter: "blur(20px)",
          mx:{xs:"auto"}
        }}
      >
       <TableBox/>
      </Box>
    </Box>
  );
};

export default Dashboard;
