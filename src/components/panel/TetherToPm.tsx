import { Box, Typography } from "@mui/material";
import BigBox from "./BigBox";
import PaymentTimer from "./Timer";
import { CustomButton } from "../Use-everywhere/CustomButton";
import SendReceiveForm from "./SendReceiveForm";
import NetworkAndAddress from "./NetworkAndAddress";
import ExchangeConditions from "./ExchangeConditions";

interface Props {
  goToStep: (step: number) => void;
}

const TetherToPm = ({ goToStep }: Props) => {
  const info = [
    "any change in exchange rate on the binance exchange gives us the right to recalculate the amount of the application.",
    "the rate for your application will be fixed after 1 confirmation online.",
    "funds are credited after 20 transaction confirmations.",
  ];
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
            transaction details :
          </Typography>
          <PaymentTimer minutes={1} />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {/* MoneyTransfer */}
          <SendReceiveForm mt="11px" />
        </Box>

        {/* network & QRcode */}
        <NetworkAndAddress />

        {/* Exchange conditions */}
        <ExchangeConditions info={info} />

        <Box
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <CustomButton
            label="Payment"
            mt={-0.25}
            mb={0}
            onClick={() => goToStep(2)}
            to=""
          ></CustomButton>
          <CustomButton
            label="Non Payment"
            mt={-0.25}
            mb={0}
            onClick={() => goToStep(2)}
            color="primary"
          ></CustomButton>
        </Box>
      </BigBox>
    </Box>
  );
};

export default TetherToPm;
