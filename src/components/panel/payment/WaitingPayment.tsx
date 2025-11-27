import BoxPayment from "./BoxPayment";
import MessageTitle from "./MessageTitle";
import TextPayment from "./TextPayment";
import HorizontalInput from "./HorizontalInput";
import wating from "../../../assets/img/waiting.svg"
import { CustomButton } from "../../Use-everywhere/CustomButton";
import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const WaitingPayment = () => {

  const navigate = useNavigate();
  const { step } = useParams(); 

  const goToPaymentSuccess = () => {
   navigate(`/home/step/${step}/pmPayment`);
  };
     const inputItems =[
    {label:"address:" , value:"x09aa998ee454c456255daf3ac94908f1dcfb7033"},
    {label:"amount :" , value:"100 USDT"}
  ]

  return (
    <BoxPayment>
      <MessageTitle icon={wating} message="waiting ..."  color="#FFAF00"/>
      <TextPayment text=" Your payment was successful and we will soon pay the amount of 100 Tether to this address :" />
      <HorizontalInput  inputItems={inputItems} mt="29px"/>
        <Box sx={{width:"100%" , display:"flex" ,justifyContent:"center"}}>
       <CustomButton label="payment"  width="173px" mt={6} onClick={goToPaymentSuccess}/>
      </Box>
    </BoxPayment>
  )
}

export default WaitingPayment