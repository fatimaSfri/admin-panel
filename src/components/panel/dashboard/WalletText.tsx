import { Box } from "@mui/material"
import { GreenDiamond } from "./Icon"
import { AppTypographyBold } from "../../Use-everywhere/AppTypography "


const WalletText = () => {
  return (
   <Box display="flex" alignItems="center">
    {/* <AppTypographyBold size={16}> get 10 </AppTypographyBold> */}
      <Box display="flex" alignItems="center" gap="8px">
        <AppTypographyBold size={16}>get</AppTypographyBold>
        <AppTypographyBold size={16}>10</AppTypographyBold>
      </Box>
    <Box sx={{color:"#40A578" , px:"5px" ,pt:"8px"}}>
       <GreenDiamond /> 
    </Box>
     <AppTypographyBold size={16}>for each invited user</AppTypographyBold>
  </Box>
  )
}

export default WalletText
