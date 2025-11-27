import BoxPayment from "./BoxPayment";
import MessageTitle from "./MessageTitle";
import TextPayment from "./TextPayment";
import HorizontalInput from "./HorizontalInput";

const UsdtPaymentSuccess = () => {

  const inputItems =[
    {label:"e- voucher :" , value:"2326564925"},
    {label:"activation code : " , value:"9012037427092330"},
    {label:"amount :" , value:"100 USDT"},
    {label:"time & date :" , value:"25-02-2023, 13:22:16"}
  ]

  return (
    <BoxPayment>
      <MessageTitle />
      <TextPayment text=" The transaction was successfully completed and the amount of 100 Tether was deposited to this address" />
      <HorizontalInput  inputItems={inputItems} />
    </BoxPayment>
  );
};

export default UsdtPaymentSuccess;
