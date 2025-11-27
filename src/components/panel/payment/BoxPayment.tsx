import { Box, Typography } from "@mui/material"
import BigBox from "../BigBox"
import PaymentTimer from "../Timer";
import SendReceiveForm from "../SendReceiveForm";

const BoxPayment = () => {
  return (
    <Box
      sx={{
        width: { xs: 11 / 12, lg: 12 / 12 },
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        flexGrow: 1,
        alignItems: "center",
        border:"2px solid red"
      }}
    >
      <BigBox padding="91px 77px 164px 78px ">
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
          }}
        >
          {/* MoneyTransfer */}
          <SendReceiveForm mt="11px" />
       </Box>
       </Box>
        
      </BigBox>
    </Box>


  )
}

export default BoxPayment