import { Box, Typography } from "@mui/material"
import BigBox from "../BigBox"
import SendReceiveForm from "../SendReceiveForm";

interface WrapperProps {
  children: React.ReactNode; 
}

const BoxPayment:React.FC<WrapperProps> = ({
    children
}) => {
  return (
    <Box
      sx={{
        width: { xs: 11 / 12, lg: 12 / 12 },
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        flexGrow: 1,
        alignItems: "center",
      }}
    >
      <BigBox padding="91px 78px 66px 78px ">
        <Box
          sx={{
            display: "flex",
            flexDirection:"column",
            gap:"81px",
          }}
        >
          <Typography
            sx={{ fontSize: "24px", color: "white", fontFamily: "NiramitBold" }}
          >
            Transaction Details :
          </Typography>
        

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            p:0,
            m:0,
            boxSizing:"border-box"
          }}
        >
          {/* MoneyTransfer */}
          <SendReceiveForm  />
       </Box>
       </Box>
       <Box sx={{mt:"25px"}}>
       {children}  
       </Box>
      </BigBox>
    </Box>


  )
}

export default BoxPayment