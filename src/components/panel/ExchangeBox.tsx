import {
  Box,
} from "@mui/material";
import ParentBox from "../Use-everywhere/ParentBox";
import { useEffect, useState } from "react";
import { ExchangeField } from "./ExchangeField";
import { CustomButton } from "../Use-everywhere/CustomButton";
import { useInfoDispatch } from "../../store/hooks";
import { setExchangeData } from "../../store/ExchangeSlice";
import icon from "../../../assets/img/Group.png"
import pmIcon from "../../../assets/img/PM2.svg"
import TetherIcon from "../../../assets/img/tether2.svg"

interface Props {
  goToStep: (step: number) => void;
}

const currencyOptions = [
  {
    label: "USDT (TRC20)",
    value: "USDT",
    rateToUSD: 1,
    icon:TetherIcon ,
  },
  {
    label: "Perfect Money",
    value: "Perfect Money",
    rateToUSD: 0.98,
    icon:pmIcon,
  },
];

const normalizeNumberString = (s: string) => {
  if (!s) return "";
  let t = s.trim();
  t = t.replace(/[,٬\s\u060C]/g, "");
  t = t.replace(/[^0-9.-]/g, "");
  const parts = t.split(".");
  if (parts.length > 2) t = parts.shift() + "." + parts.join("");
  return t;
};
const parseNumber = (s: string) => {
  const n = Number(normalizeNumberString(s));
  return Number.isFinite(n) ? n : NaN;
};


const ExchangeBox: React.FC<Props> = ({goToStep}) => {
  const dispatch = useInfoDispatch()
  const [fromAmount, setFromAmount] = useState<string>("100");
  const [toAmount, setToAmount] = useState<string>("100");
  const [fromCurrency, setFromCurrency] = useState(currencyOptions[0]);
  const [toCurrency, setToCurrency] = useState(currencyOptions[1]);

const convertNumber = (
  valueStr: string,
  from: typeof fromCurrency,
  to: typeof toCurrency
) => {
  const valueNum = parseNumber(valueStr);
  if (Number.isNaN(valueNum)) return "";


  const rawResult = valueNum * (from.rateToUSD / to.rateToUSD) + 20;

  return Math.round(rawResult).toString();
};

  useEffect(() => {
    if (!fromAmount) {
      setToAmount("");
      return;
    }
    const result = convertNumber(fromAmount, fromCurrency, toCurrency);
    setToAmount(result);
  }, [fromAmount, fromCurrency, toCurrency]);

  const handleSwap = () => {
    const nextFrom = toCurrency;
    const nextTo = fromCurrency;
    const nextFromAmount = toAmount || fromAmount;
    const nextToAmount = nextFromAmount
      ? convertNumber(nextFromAmount, nextFrom, nextTo)
      : "";

    setFromCurrency(nextFrom);
    setToCurrency(nextTo);
    setFromAmount(nextFromAmount);
    setToAmount(nextToAmount);
  };

 const handleMakeExchange = () => {
    dispatch(setExchangeData({
      fromCurrency,
      toCurrency,
      fromAmount,
      toAmount,
    }));

    goToStep(1);
  };

  
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "27px",
        alignItems: "center",
      }}
    >
      {/* box 1 */}
      <ParentBox>
        <ExchangeField
          label="From :"
          amount={fromAmount}
          setAmount={setFromAmount}
          currency={fromCurrency}
          setCurrency={setFromCurrency}
          minMaxText="Min: $100 &nbsp;&nbsp;&nbsp;&nbsp; Max: $4832"
          currencyOptions={currencyOptions}
        />
      </ParentBox>

      {/* button changes */}
      <Box
        sx={{
          position: "absolute",
          width: "69px",
          background: "#242C39",
          borderRadius:"50%",
          height: "69px",
          zIndex: 1,
          mt: "200px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          cursor:"pointer"
        }}
         onClick={handleSwap}
      >
        <Box
          component="img"
          src={icon}
          alt="icon"
          sx={{
        height:"19px"
          }}
        />
      </Box>

      {/* box 2 */}
      <ParentBox>
        <ExchangeField
          label="To :"
          amount={toAmount}
          currency={toCurrency}
          setCurrency={setToCurrency}
          readOnly={true}
          minMaxText="Min: $100 &nbsp;&nbsp;&nbsp;&nbsp; Max: $4832"
          currencyOptions={currencyOptions}
        />
      </ParentBox>
     <CustomButton label="Make Exchange" mt={0} mb={4} onClick={handleMakeExchange}></CustomButton>

    </Box>
  );
};

export default ExchangeBox;
