import { Box, Typography } from "@mui/material";
import Tick from "../../../assets/img/Tick.svg"

interface Props {
  message ?:string,
  icon ?: string ;
  color?:string,
}

const MessageTitle:React.FC<Props>= ({
  message="payment success !",
  icon = Tick,
  color="#40A578"
}) => {
  return (
    <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap:"16px"
        }}
      >
        <Box component="img" src={icon} sx={{width:"41px", height:"41px"}}></Box>
        <Typography sx={{
          fontSize:"32px",
          fontFamily:"NiramitBold",
          color:color,
          textTransform:"capitalize",
          lineHeight:"100%",
          letterSpacing:"0px"
          }}>
           {message}
        </Typography>
      </Box>
  )
}

export default MessageTitle