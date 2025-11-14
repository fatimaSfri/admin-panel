import {
  Box,
  Divider,
  InputBase,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import ParentBox from "../ParentBox";
import { useEffect, useState } from "react";
import { Ex } from "./ExchangeField";
import { CustomButton } from "../CustomButton";

interface Props {
  goToStep: (step: number) => void;
}

const currencyOptions = [
  {
    label: "USDT (TRC20)",
    value: "usdt",
    rateToUSD: 1,
    icon: "../../../src/assets/img/tether2.svg",
  },
  {
    label: "Perfect Money",
    value: "pm",
    rateToUSD: 0.98,
    icon: "../../../src/assets/img/PM2.svg",
  },
];

const normalizeNumberString = (s: string) => {
  if (!s) return "";
  let t = s.trim();
  t = t.replace(/[,٬\s\u060C]/g, "");
  t = t.replace(/[^0-9.\-]/g, "");
  const parts = t.split(".");
  if (parts.length > 2) t = parts.shift() + "." + parts.join("");
  return t;
};
const parseNumber = (s: string) => {
  const n = Number(normalizeNumberString(s));
  return Number.isFinite(n) ? n : NaN;
};
// const toFixedTrim = (n: number, decimals = 6) =>
//   n.toFixed(decimals).replace(/\.?0+$/, "");

const ExchangeBox: React.FC<Props> = ({goToStep}) => {
  const [fromAmount, setFromAmount] = useState<string>("1000");
  const [toAmount, setToAmount] = useState<string>("1000");
  const [fromCurrency, setFromCurrency] = useState(currencyOptions[0]);
  const [toCurrency, setToCurrency] = useState(currencyOptions[1]);

const convertNumber = (
  valueStr: string,
  from: typeof fromCurrency,
  to: typeof toCurrency
) => {
  const valueNum = parseNumber(valueStr);
  if (Number.isNaN(valueNum)) return "";

  // 20 واحد بیشتر + تبدیل نرخ
  const rawResult = valueNum * (from.rateToUSD / to.rateToUSD) + 20;

  // گرد به عدد صحیح
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
    alert(
      `Exchange: ${fromAmount} ${fromCurrency.label} → ${toAmount} ${toCurrency.label}`
    );
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        border: "2px solid green",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "27px",
        alignItems: "center",
      }}
    >
      {/* box 1 */}
      <ParentBox>
        <Ex
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
          src="../../../src/assets/img/Group.png"
          alt="icon"
          sx={{
        //    width:"26.13px",
        //    height:"19px"
          }}
        />
      </Box>

      {/* box 2 */}

      <ParentBox>
        <Ex
          label="To :"
          amount={toAmount}
          currency={toCurrency}
          setCurrency={setToCurrency}
          readOnly={true}
          minMaxText="Min: $100 &nbsp;&nbsp;&nbsp;&nbsp; Max: $4832"
          currencyOptions={currencyOptions}
        />
      </ParentBox>
     <CustomButton label="Make Exchange" mt={0} mb={4} onClick={() => goToStep(1)}></CustomButton>

    </Box>
  );
};

export default ExchangeBox;
