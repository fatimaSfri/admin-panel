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
import { Link } from "react-router-dom";

const SidebarMenu = () => {
      const [selected, setSelected] = useState("dashboard");

  const menuItems = [
    { title: "Dashboard", icon: DashboardIcon , link:"" },
    { title: "Profile", icon: ProfileIcon , link:"edite-profile" },
    { title: "Partner Program", icon: PartnerIcon  , link:"partner-program"},
    { title: "Exit", icon: ExitIcon  , link:"table"},
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg")); 
  return (
  <Box
        sx={{
          maxWidth: "270px",
          width: "100%",
          height: { xs: "60px", lg: "311px" },
          boxSizing: "border-box",
          borderRadius: "20px",
          backgroundColor: "rgba(250, 250, 250, 0.025)",
          backdropFilter: "blur(20px)",
          padding: {
            xs: "12px 12px", 
            lg: "38px 73px 45px 32px",
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
            gap: { xs: "0px", lg: "40px" },

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
              <Link to={item.link} style={{ textDecoration: "none" }}>
              <ToggleButton
                disableRipple
                value={item.title}
                sx={{
                  display: "flex",
                  gap: { xs: 0, lg: "16px" },
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
                    display: { xs: "none", lg: "block" },
                  }}
                >
                  {item.title}
                </Typography>
              </ToggleButton>
              </Link>
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



