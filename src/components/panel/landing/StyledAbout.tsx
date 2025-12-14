import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1140px",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  flexGrow: 1,
  alignItems: "center",
  margin: "140px auto 0",

  [theme.breakpoints.down("lg")]: {
    width: "90%",
  },
}));

export const ContentRow = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "40px",
  [theme.breakpoints.down("lg")]: {
    gap: "10px",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  },
}));

export const TextWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "498px",

  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  aspectRatio: "1 / 1 ",
  maxWidth: 535,
  borderRadius: "50%",
  backgroundColor: "#242C39",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "-150px",

  [theme.breakpoints.down("md")]: {
    width: 360,
    marginBottom: 0,
  },
}));

export const Image = styled("img")(({ theme }) => ({
  Width: "100%",
  height: "auto",

  [theme.breakpoints.down("lg")]: {
    width: "70%",
  },
  [theme.breakpoints.down("md")]: {
    width: "60%",
  },
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  maxWidth: 1140,
  width: "100%",
  display: "flex",
  gap: 55,
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  marginBottom: 117,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    gap: 40,
  },
}));

export const VerticalLine = styled(Box)(() => ({
  width: 1,
  height: "100%",
  backgroundColor: "#2E3E59",
  position: "absolute",
  zIndex: 0,
}));

export const ContentOuter = styled(Box)(({ theme }) => ({
  marginTop: 80,
  zIndex: 10,

  [theme.breakpoints.down("md")]: {
    marginTop: 40,
  },
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  padding: "42px 28px 80px 69px",
  border: "1px solid #2E3E59",
  borderRadius: 30,
  backgroundColor: "#242C39",

  [theme.breakpoints.down("sm")]: {
    padding: "32px 24px 48px 32px",
  },
}));
