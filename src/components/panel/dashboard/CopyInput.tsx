import { Box, Typography } from "@mui/material";
import StyledInput from "../../Use-everywhere/StyledInput";
import copyIcon from "../../../assets/img/copyIcon.svg";

export default function CopyBox() {
  const text =
    "https://en.flashobmen.com/ref/acc0c4c8-c799-4216-a281-6d3d3c43a480";

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <StyledInput
        value={text}
        fullWidth
        InputProps={{
          readOnly: true,
          endAdornment: (
            <Box
              sx={{
                maxWidth: "106px",
                 px:2,
                 boxSizing:"border-box",
                minWidth: "13%",
                bgcolor: "#353F50",
                position: "absolute",
                right: 0,
                height: "100%",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#ABABAB",
                gap: "6px",
                cursor:"pointer"
              }}
              onClick={() => handleCopy(text)}
            >
              <Box component="img" src={copyIcon} />
              <Typography 
              sx={{fontFamily:"NiramitBold" ,
                lineHeight:"36px",
                letterSpacing:"0px"
               }}>Copy</Typography>
            </Box>
          ),
        }}
      />
    </Box>
  );
}
