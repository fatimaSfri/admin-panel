import BoxPayment from "./BoxPayment";
import MessageTitle from "./MessageTitle";
import TextPayment from "./TextPayment";
import close from "../../../assets/img/close.svg"
import { CustomButton } from "../../Use-everywhere/CustomButton";
import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const UsdtPaymentFiled = () => {
    const navigate = useNavigate();
  const { step } = useParams(); 

  const goToPaymentSuccess = () => {
   navigate(`/home/step/${step}`);
  };

  return (
    <BoxPayment>
      <MessageTitle icon={close} color="#F66066" message="Your payment time has expired !" />
      <TextPayment text="Please complete the payment process again" />
      <Box sx={{width:"100%" , display:"flex" ,justifyContent:"center"}}>
       <CustomButton label="try again"  width="173px" onClick={goToPaymentSuccess}/>
      </Box>
    </BoxPayment>
  )
}

export default UsdtPaymentFiled