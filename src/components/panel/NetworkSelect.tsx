import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import arrow from "../../assets/img/arrow.svg";

interface NetworkSelectProps {
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
  address?: string;
  onAddressChange?: (value: string) => void;
  editable?: boolean;
  maxWidth?:string
}

const NetworkSelect: React.FC<NetworkSelectProps> = ({
  options = ["TRON", "TRC20"],
  value: initialValue = "TRON",
  onChange = () => {},
  address,
  onAddressChange = () => {},
  editable = false,
  maxWidth = "736px"
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleSelect = (val: string) => {
    setValue(val);
    onChange(val);
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth,
        height: "57px",
        display: "flex",
        position: "relative",
      }}
    >
      {/* LEFT BUTTON */}
      <Box
        onClick={() => setOpen((prev) => !prev)}
        sx={{
          minWidth: "100px",
          width: "17%",
          boxSizing: "border-box",
          bgcolor: "#1D8D94",
          borderRadius: "10px 0 0 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: "16px", md: "27px" },
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "16px",
            fontFamily: "NiramitBold",
          }}
        >
          {value}
        </Typography>
        <Box
          component="img"
          src={arrow}
          sx={{ minWidth: "24px", minHeight: "24px", mt: "2px" }}
        />
      </Box>

      {/* RIGHT INPUT FIELD */}
      <TextField
        value={address}
        onChange={(e) => onAddressChange(e.target.value)}
        placeholder="Please Enter Address "
        disabled={!editable}
        sx={{
          flex: 1,
          bgcolor: "#242C39",
          borderRadius: "0 10px 10px 0",
          input: {
            color: "white",
            fontFamily: "NiramitBold",
            fontSize: "14px",
            pl: "19px",
            "&::placeholder": {
              color: "white !important",
              opacity: 1,
              fontSize: "14px",
              fontFamily: "NiramitBold",
            },
          },
          "& fieldset": {
            border: "none",
          },
        }}
      />

      {/* DROPDOWN MENU */}
      {open && (
        <Box
          sx={{
            position: "absolute",
            top: "52px",
            width: "160px",
            bgcolor: "#242C39",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0px 4px 15px rgba(0,0,0,0.4)",
          }}
        >
          {options.map((opt) => (
            <Box
              key={opt}
              onClick={() => handleSelect(opt)}
              sx={{
                px: 2,
                py: 1.2,
                cursor: "pointer",
                fontFamily: "Niramit",
                fontWeight: 700,
                fontSize: "14px",
                color: "#fff",
                "&:hover": {
                  bgcolor: "#263542",
                },
              }}
            >
              {opt}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NetworkSelect;
