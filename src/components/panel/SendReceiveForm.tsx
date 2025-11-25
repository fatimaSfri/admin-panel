import { Box } from "@mui/material";
import SendReceiveItems from "./SendReceiveItems";
import { useInfoSelector } from "../../store/hooks";

interface SendReceiveFormProps {
  mt?: string ;
}

const SendReceiveForm:React.FC<SendReceiveFormProps> = ({ mt }) => {
  const exchangeData = useInfoSelector((state) => state.exchange.data);
  
  return (
    <>
    <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt
        }}
      >
  <SendReceiveItems
          label="Send:"
          amount={exchangeData.fromAmount}
          currency={exchangeData.fromCurrency}
        />

        <SendReceiveItems
          label="Receive:"
          amount={exchangeData.toAmount}
          currency={exchangeData.toCurrency}
          isReceive
        />
        </Box>

        <Box
        sx={{
          width: "100%",
          mx: "auto",
          bgcolor: "#596B89",
          height: "1px",
          mt: "18px",
        }}
      />
      </>
  )
}

export default SendReceiveForm
