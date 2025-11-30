import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DashboardIcon } from "./Icon";
import { ProfileIcon } from "./Icon";
import { PartnerIcon } from "./Icon";
import { ExitIcon } from "./Icon";
import { useState } from "react";

const SidebarMenu = () => {
      const [selected, setSelected] = useState("dashboard");

  const menuItems = [
    { title: "Dashboard", icon: DashboardIcon },
    { title: "Profile", icon: ProfileIcon },
    { title: "Partner Program", icon: PartnerIcon },
    { title: "Exit", icon: ExitIcon },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); 
  return (
  <Box
        sx={{
          maxWidth: "270px",
          width: "100%",
          height: { xs: "60px", md: "311px" },
          boxSizing: "border-box",
          borderRadius: "20px",
          backgroundColor: "rgba(250, 250, 250, 0.025)",
          backdropFilter: "blur(20px)",
          padding: {
            xs: "12px 12px", 
            md: "38px 73px 45px 32px",
          },
          display: "flex",
          alignItems: "center",
        }}
      >
        <ToggleButtonGroup
          orientation={isMobile ? "horizontal" : "vertical"} 
          value={selected}
          exclusive
          onChange={(_, val) => {
            if (val !== null) setSelected(val);
          }}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            justifyContent: isMobile ? "space-between" : "flex-start",
            gap: { xs: "0px", md: "40px" },

            "& .MuiToggleButtonGroup-grouped": {
              boxSizing: "border-box",
              color: "#ABABAB",
              backgroundColor: "transparent",
              border: "none",
              padding: 0,
              width: isMobile ? "auto" : "100%",
              justifyContent: isMobile ? "center" : "flex-start",
              transition: "all 300ms ease-out",

              "&:hover": {
                color: "white",
                backgroundColor: "transparent !important",
              },

              "&.Mui-selected": {
                color: "white !important",
                backgroundColor: "transparent !important",
                fontFamily: "NiramitSemiBold",
                opacity: 1,
                transition: "all 300ms ease-out",
              },
            },

            "& .MuiToggleButton-root": {
              textTransform: "none",
              padding: 0,
              margin: 0,
              boxSizing: "border-box",
              width: isMobile ? "auto" : "100%",
            },
          }}
        >
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            const content = (
              <ToggleButton
                disableRipple
                value={item.title}
                sx={{
                  display: "flex",
                  gap: { xs: 0, md: "16px" },
                  width: isMobile ? "auto" : "100%",
                  justifyContent: isMobile ? "center" : "flex-start",
                  transition: "all 300ms ease-out",
                }}
              >
                <Box sx={{ width: 18, height: 18 }}>
                  <Icon />
                </Box>

                <Typography
                  sx={{
                    fontSize: "18px",
                    width: "100%",
                    textAlign: "left",
                    textWrap: "nowrap",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  {item.title}
                </Typography>
              </ToggleButton>
            );

            return isMobile ? (
              <Tooltip key={index} title={item.title} placement="top" arrow>
                {content}
              </Tooltip>
            ) : (
              <Box key={index}>{content}</Box>
            );
          })}
        </ToggleButtonGroup>
      </Box>
  )
}

export default SidebarMenu




// next way
  {/* Left Menu */}
// //       <Box
// //         sx={{
// //           maxWidth: "270px",
// //           width: "100%",
// //           height: "294px",
// //           borderRadius: "20px",
// //           backgroundColor: "rgba(250, 250, 250, 0.025)",
// //           backdropFilter: "blur(20px)",
// //           padding: "38px 73px 45px 32px",
// //           boxSizing: "border-box",
// //         }}
// //       >
// //         <Box
// //           sx={{
// //             display: "flex",
// //             flexDirection: "column",
// //             gap: "40px", // ← فقط فاصله بین آیتم‌ها
// //             height: "100%",
// //             boxSizing: "border-box",
// //           }}
// //         >
// //           {menuItems.map((item, index) => {
// //             const Icon = item.icon;
// //             return (
// //               <Box
// //                 key={index}
// //                 onClick={() => setSelected(item.title)}
// //                 sx={{
// //                   display: "flex",
// //                   alignItems: "center",
// //                   gap: "16px",
// //                   cursor: "pointer",
// //                   color: selected === item.title ? "white" : "#ABABAB",
// //                   userSelect: "none",
// //                 }}
// //               >
// //                 <Box sx={{ width: 18, height: 18 }}>
// //                   <Icon />
// //                 </Box>
// //                 <Typography
// //                   sx={{
// //                     fontSize: "18px",
// //                     fontFamily: selected === item.title ? "NiramitSemiBold" : "inherit",
// //                   }}
// //                 >
// //                   {item.title}
// //                 </Typography>
// //               </Box>
// //             );
// //           })}
// //         </Box>
// //       </Box>
