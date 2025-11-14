// components/ExchangeField.tsx
import React from "react";
import {
  Box,
  Typography,
  InputBase,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";

interface CurrencyOption {
  label: string;
  value: string;
  rateToUSD: number;
  icon: string;
}

interface ExchangeFieldProps {
  label: string;
  amount: string;
  setAmount?: (value: string) => void;
  currency: CurrencyOption;
  setCurrency: (currency: CurrencyOption) => void;
  readOnly?: boolean;
  minMaxText: string;
  currencyOptions: CurrencyOption[];
}

const normalizeNumberString = (s: string) => {
  if (!s) return "";
  let t = s.trim();
  t = t.replace(/[,٬\s\u060C]/g, "");
  t = t.replace(/[^0-9.\-]/g, "");
  const parts = t.split(".");
  if (parts.length > 2) t = parts.shift() + "." + parts.join("");
  return t;
};

export const Ex: React.FC<ExchangeFieldProps> = ({
  label,
  amount,
  setAmount,
  currency,
  setCurrency,
  readOnly = false,
  minMaxText,
  currencyOptions,
}) => {
  return (
   <>
      {/* عنوان */}
      <Typography
        sx={{
          color: "#ABABAB",
          fontSize: 16,
          mb: 1,
          fontFamily: "NiramitBold",
        }}
      >
        {label}
      </Typography>

      {/* باکس یکپارچه */}
      <Box
        sx={{
          minWidth: "485px",
          display: "flex",
          alignItems: "center",
          bgcolor: "#242C39",
          borderRadius: "10px",
          overflow: "hidden",
          height: 57,
          p: 0,
        }}
      >
        {/* مقدار */}
        <InputBase
          value={amount}
          onChange={(e) =>
            !readOnly && setAmount?.(normalizeNumberString(e.target.value))
          }
          type="text"
          placeholder="0.00"
          inputProps={{ readOnly }}
          sx={{
            flex: 1,
            px: "18px",
            color: "#fff",
            fontWeight: 700,
            fontSize: 14,
            "& input": {
              p: 0,
              "&::placeholder": {
                color: "#979e9c",
                opacity: 1,
              },
            },
          }}
        />

        {/* خط عمودی */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            mx: 1,
            height: 38,
            alignSelf: "center",
            borderColor: "#5B5F5E",
          }}
        />

        {/* سلکتور ارز */}
        <Select
          value={currency.value}
          onChange={(e) =>
            setCurrency(
              currencyOptions.find((c) => c.value === e.target.value)!
            )
          }
          displayEmpty
          MenuProps={{
            anchorOrigin: { vertical: "bottom", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "right" },
            PaperProps: {
              sx: {
                bgcolor: "#1e293b",
                color: "#e2e8f0",
                mt: 0,
                borderRadius: "0 0 12px 12px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                maxHeight: 300,
              },
            },
            sx: { "& .MuiMenu-list": { p: 0 } },
          }}
          sx={{
            width: "48%",
            height: "100%",
            "& .MuiSelect-select": {
              p: "12px 10px",
              color: "#979E9C",
              fontWeight: 400,
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              gap: 1,
            },
            "& .MuiSelect-icon": { display: "none" },
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
          }}
        >
          {currencyOptions.map((c) => (
            <MenuItem key={c.value} value={c.value} sx={{ fontSize: 14 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  component="img"
                  src={c.icon}
                  alt={c.label}
                  sx={{
                    width: 25,
                    height: 25,
                    borderRadius: "50%",
                    objectFit: "contain",
                  }}
                />
                {c.label}
              </Box>
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* متن پایین */}
      <Typography sx={{ color: "#ABABAB", fontSize: 14 }}>
        {minMaxText}
      </Typography>
    </>
  );
};

