import { Box, Typography } from "@mui/material";
import BigBox from "./BigBox";
import CustomInput from "../Use-everywhere/CustomInput";
import CheckBox from "./CheckBox";
import { useState } from "react";
import { CustomButton } from "../Use-everywhere/CustomButton";
import { useInfoSelector } from "../../store/hooks";
import SendReceiveForm from "./SendReceiveForm";
import ExchangeConditions from "./ExchangeConditions";

interface Props {
  goToStep: (step: number) => void;
}

const Confirm = ({ goToStep }: Props) => {
  const [agree, setAgree] = useState(false);
  const info = [
    "any change in exchange rate on the binance exchange gives us the right to recalculate the amount of the application.",
    "the rate for your application will be fixed after 1 confirmation online.",
    "funds are credited after 20 transaction confirmations.",
    "we conduct AML checks in accordance with the AML policy of the flashobmen service.",
    "fill out all fields of the form provided.",
    "click the “make an exchange” button.",
    "read the terms of exchange. if you accept them, check the approprite boxes9. pay for the application according to the instructions on the website.",
  ];

  const currentUser = useInfoSelector((state) => state.user.items.length > 0);

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
      <BigBox>
        <Typography
          sx={{
            color: "white",
            fontFamily: "NiramitBold",
            fontSize: { xs: "20px", md: "22px", lg: "24px" },
          }}
        >
          Invoice Details :
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
          <SendReceiveForm />

          {/* Email input */}
          {!currentUser && (
            <Box>
              <CustomInput
                lable="Email :"
                placeholder="Please Enter Your Email"
                value=""
                name="email"
              ></CustomInput>
            </Box>
          )}
        </Box>
        
          {/* Exchange conditions */}
          <Box sx={{display:"flex" , flexDirection:"column", gap:"31px"}}>
          <ExchangeConditions info={info} />
            <CheckBox
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            ></CheckBox>
         </Box>
        {/* </Box> */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomButton
           disabled={agree?false:true}
            label="Confirm"
            mt={-0.25}
            mb={0}
            onClick={() => goToStep(2)}
          ></CustomButton>

        </Box>
      </BigBox>
    </Box>
  );
};

export default Confirm;
