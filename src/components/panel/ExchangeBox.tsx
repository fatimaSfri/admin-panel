import { Box } from "@mui/material";
import ParentBox from "../Use-everywhere/ParentBox";
import { useState } from "react";
import { ExchangeField } from "./ExchangeField";
import { CustomButton } from "../Use-everywhere/CustomButton";
import { useInfoDispatch } from "../../store/hooks";
import { setExchangeData } from "../../store/ExchangeSlice";
import exchange from "../../assets/img/exchange-button.svg";
import pmIcon from "../../assets/img/PM2.svg";
import TetherIcon from "../../assets/img/tether2.svg";

interface Props {
  goToStep: (step: number) => void;
}

const currencyOptions = [
  { label: "USDT (TRC20)", value: "USDT", rateToUSD: 1, icon: TetherIcon },
  { label: "Perfect Money", value: "Perfect Money", rateToUSD: 0.98, icon: pmIcon },
];

const normalizeNumberString = (s: string) => {
  if (!s) return "";
  let t = s.trim().replace(/[,٬\s\u060C]/g, "").replace(/[^0-9.-]/g, "");
  const parts = t.split(".");
  if (parts.length > 2) t = parts.shift() + "." + parts.join("");
  return t;
};

const parseNumber = (s: string) => {
  const n = Number(normalizeNumberString(s));
  return Number.isFinite(n) ? n : NaN;
};

const ExchangeBox: React.FC<Props> = ({ goToStep }) => {
  const dispatch = useInfoDispatch();
  const DIFF = 20;

  const [fromAmount, setFromAmount] = useState<string>("100");
  const [toAmount, setToAmount] = useState<string>("120");
  const [fromCurrency, setFromCurrency] = useState(currencyOptions[0]);
  const [toCurrency, setToCurrency] = useState(currencyOptions[1]);

  const handleFromAmountChange = (val: string) => {
    setFromAmount(val);
    const num = parseNumber(val);
    if (isNaN(num) || num === 0) {
      setToAmount("0");
    } else {
      setToAmount((num + DIFF).toString());
    }
  };


  const handleToAmountChange = (val: string) => {
    setToAmount(val);
    const num = parseNumber(val);
    if (isNaN(num) || num === 0) {
      setFromAmount("0");
    } else {
      const calculated = num - DIFF;
      setFromAmount(calculated > 0 ? calculated.toString() : "0");
    }
  };

  const handleSwap = () => {
    const prevFromC = fromCurrency;
    const prevToC = toCurrency;
    setFromCurrency(prevToC);
    setToCurrency(prevFromC);

    const prevFromA = fromAmount;
    const prevToA = toAmount;
    setFromAmount(prevToA);
    setToAmount(prevFromA);
  };


  const handleFromCurrencyChange = (newCurrency: typeof fromCurrency) => {
    if (newCurrency.value === toCurrency.value) {
      handleSwap();
    } else {
      setFromCurrency(newCurrency);
  
    }
  };


  const handleToCurrencyChange = (newCurrency: typeof toCurrency) => {
    if (newCurrency.value === fromCurrency.value) {
      handleSwap();
    } else {
      setToCurrency(newCurrency);
    }
  };

  const handleMakeExchange = () => {
    dispatch(setExchangeData({ fromCurrency, toCurrency, fromAmount, toAmount }));
    goToStep(1);
  };

  return (
    <Box sx={{ flexGrow: 1, width: "100%", display: "flex", flexDirection: "column", gap: "27px", alignItems: "center" }}>
      <ParentBox>
        <ExchangeField
          label="From :"
          amount={fromAmount}
          setAmount={handleFromAmountChange}
          currency={fromCurrency}
          setCurrency={handleFromCurrencyChange}
          minMaxText="Min: $100 &nbsp;&nbsp;&nbsp;&nbsp; Max: $4832"
          currencyOptions={currencyOptions}
        />
      </ParentBox>

      <Box
        sx={{
          position: "absolute", width: "69px", background: "#242C39", borderRadius: "50%",
          height: "69px", zIndex: 1, mt: "200px", display: "flex", justifyContent: "center",
          alignItems: "center", cursor: "pointer",
        }}
        onClick={handleSwap}
      >
        <Box component="img" src={exchange} alt="icon" />
      </Box>

      <ParentBox>
        <ExchangeField
          label="To :"
          amount={toAmount}
          setAmount={handleToAmountChange}
          currency={toCurrency}
          setCurrency={handleToCurrencyChange}
          readOnly={false}
          minMaxText="Min: $100 &nbsp;&nbsp;&nbsp;&nbsp; Max: $4832"
          currencyOptions={currencyOptions}
        />
      </ParentBox>

      <CustomButton label="Make Exchange" mt={0} mb={4} onClick={handleMakeExchange} />
    </Box>
  );
};

export default ExchangeBox;