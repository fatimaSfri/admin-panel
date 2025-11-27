import BoxPayment from "./BoxPayment";
import MessageTitle from "./MessageTitle";
import TextPayment from "./TextPayment";
import close from "../../../assets/img/close.svg"
import { CustomButton } from "../../Use-everywhere/CustomButton";
import { Box } from "@mui/material";

const UsdtPaymentFiled = () => {
  return (
    <BoxPayment>
      <MessageTitle icon={close} color="#F66066" message="Your payment time has expired !" />
      <TextPayment text="Please complete the payment process again" />
      <Box sx={{width:"100%" , display:"flex" ,justifyContent:"center"}}>
       <CustomButton label="try again"  width="173px"/>
      </Box>
    </BoxPayment>
  )
}

export default UsdtPaymentFiled