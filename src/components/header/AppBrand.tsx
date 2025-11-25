import { CardMedia, Stack, Typography } from "@mui/material";
import PMUSDT from "../../assets/img/logo.png";

const AppBrand = () => {
  return (
    <Stack
      direction="row"
      spacing={0.5}
      alignItems="center"
      sx={{
        padding: 2,
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: 40, lg: 56, xl: 68 },
          height: "auto",
        }}
        src={PMUSDT}
        alt=" logo"
      />
      <Typography
        sx={{
          fontFamily: "Russo One, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: { xs: 16, lg: 20 },
          lineHeight: "100%",
          letterSpacing: "20%",
          background:
            "linear-gradient(89.99deg, #1D8D94 30.54%, #99D9A6 99.99%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          leadingTrim: "none",
        }}
      >
        PMUSDT.COM
      </Typography>
    </Stack>
  );
};

export default AppBrand;
