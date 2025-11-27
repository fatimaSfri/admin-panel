import { Box, Typography } from "@mui/material";
import BigBox from "./BigBox";
import PaymentTimer from "./Timer";
import SendReceiveForm from "./SendReceiveForm";
import CustomInput from "../Use-everywhere/CustomInput";
import NetworkSelect from "./NetworkSelect";
import { CustomButton } from "../Use-everywhere/CustomButton";
import { useNavigate, useParams } from "react-router-dom";


const PmToTether = () => {

 const navigate = useNavigate();
  const { step } = useParams(); 

  const goToPaymentSuccess = () => {
   navigate(`/home/step/${step}/waiting`);
  };


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
      <BigBox padding="91px 77px 164px 77px ">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            overflow: "visible !important",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "40px", sm: "10px" },
          }}
        >
          <Typography
            sx={{ fontSize: "24px", color: "white", fontFamily: "NiramitBold" }}
          >
            Transaction Details :
          </Typography>
          <PaymentTimer minutes={1} />
        </Box>

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
          <Box>
            <CustomInput value="" name="" lable="perfect money code :" placeholder="Please enter perfect money code " mb="12px"/>
             <CustomInput value="" name="" lable="perfect money number :" placeholder="Please enter perfect money number " mb="12px"/>
             <Typography sx={{fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB",  fontFamily:"NiramitBold", textTransform:"capitalize" , mb:"12px"}}>choose network and enter Tether address :</Typography>
             <NetworkSelect editable={true}  maxWidth="983px"/>
          </Box>
        </Box>
        
        
        <CustomButton label="Submit" mt={0} mb="0"  onClick={goToPaymentSuccess}/>
        
      </BigBox>
    </Box>
  );
};

export default PmToTether;
