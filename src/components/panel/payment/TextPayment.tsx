import { Typography } from "@mui/material"
import type React from "react"

interface  Props {
 text:string
}

const TextPayment:React.FC<Props> = ({
    text
}) => {
  return (
   <Typography sx={{
        mt:"28px",
        fontSize:"20px",
        fontFamily:"NiramitBold",
        color:"#ABABAB",
        textTransform:"capitalize",
        lineHeight:"40px",
        letterSpacing:"-0.2px",
        textAlign:"center",
        pb:1,
        boxSizing:"border-box"
       }}>
        {text}
     </Typography>
  )
}

export default TextPayment