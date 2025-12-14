import { styled, Typography } from "@mui/material";

interface GradientTextProps {
  fontSizeLg?: string | number;
  fontSizeXs?: string | number;
}

export const GradientText = styled(Typography)<GradientTextProps>(
  ({ theme, fontSizeLg, fontSizeXs }) => ({
    fontFamily: "NiramitBold",

    fontSize: fontSizeXs ?? "24px",

    [theme.breakpoints.up("lg")]: {
      fontSize: fontSizeLg ?? "32px",
    },
    lineHeight: "49px",
    letterSpacing: "0%",
    textTransform: "capitalize",
    background: "linear-gradient(90deg, #40A578 0%, #99D9A6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  })
);
