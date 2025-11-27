import BoxPayment from "./BoxPayment";
import MessageTitle from "./MessageTitle";
import TextPayment from "./TextPayment";
import HorizontalInput from "./HorizontalInput";
import { CustomButton } from "../../Use-everywhere/CustomButton";
import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const PMPaymentSuccesse = () => {
    const navigate = useNavigate();
  const { step } = useParams(); 

  const goToPaymentSuccess = () => {
   navigate(`/home/step/${step}/paymentFiled`);
  };
    const inputItems =[
    {label:"address:" , value:"x09aa998ee454c456255daf3ac94908f1dcfb7033"},
    {label:"amount :" , value:"100 USDT"},
    {label:"time & date :" , value:"25-02-2023, 13:22:16"},
    {label:"tx id :" , value:"f9798ecf9e9cc54dd819c8e1dc36588a6a7fe9d8e055d56ef6a9847139a4ed6c" , copy: true}
  ]

  return (
   <BoxPayment>
      <MessageTitle />
      <TextPayment text=" The transaction was successfully completed and the amount of 100 Tether was deposited to this address" />
      <HorizontalInput  inputItems={inputItems}  />
      <Box sx={{width:"100%" , display:"flex" ,justifyContent:"center"}}>
       <CustomButton label="payment"  width="173px" mt={6} onClick={goToPaymentSuccess}/>
      </Box>
    </BoxPayment>
  )
}

export default PMPaymentSuccesse