import { styled, Typography } from "@mui/material";

export const GradientText = styled(Typography)(() => ({
  fontFamily: "NiramitBold",
  fontSize: "32px",
  lineHeight: "49px",
  letterSpacing: "0%",
  textTransform: "capitalize",
   background:"linear-gradient(90deg, #40A578 0%, #99D9A6 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));
