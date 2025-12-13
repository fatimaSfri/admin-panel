import { styled, Typography } from "@mui/material";

interface AppTypographyBoldProps {
  size?: number;
  color?: string; 
}

export const AppTypographyBold = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "size" && prop !== "color",
})<AppTypographyBoldProps>(({ size = 20, color = "#ABABAB" }) => ({
  fontFamily: "NiramitBold",
  textTransform: "capitalize",
  letterSpacing: 0,
  lineHeight: "100%",
  fontSize: `${size / 16}rem`,
  color: color,
}));

export const AppTypographySemiBold = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "size",
})<{ size?: number }>(({ size = 24 }) => ({
  fontFamily: "NiramitSemiBold",
  textTransform: "capitalize",
  letterSpacing: 0,
  lineHeight: "100%",
  fontSize: `${size / 16}rem`,
  color:"white"
}));