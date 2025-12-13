import { Box } from "@mui/material"
import BigBox from "../BigBox"
import { GradientText } from "../dashboard/GradientText"
import StyledInput from "../../Use-everywhere/StyledInput"


const FAQ = () => {
  return (
    <Box
      sx={{
        width: { xs: 11 / 12, lg: 12 / 12 },
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        flexGrow: 1,
        alignItems: "center",
        mt:"140px",
        mx:"auto"
      }}
    >
      <BigBox padding="59px 96px 64px">
         <Box mx="auto">
           <GradientText fontSizeLg="48px" fontSizeXs="28px">help center</GradientText>
         </Box>
          <StyledInput></StyledInput>
       </BigBox>
    </Box>
  )
}

export default FAQ