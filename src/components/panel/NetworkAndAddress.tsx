import { Box, Typography } from "@mui/material"
import NetworkInputSelect from "./NetworkSelect";
import QrScannerTS from "./QrScanner";
import { useState } from "react";

const NetworkAndAddress = () => {
  const [address,setAddress]= useState("TJ8f92jf92j9j203jf209jf203")
  const handleQrValue = (value: string) => {
     setAddress(value)
  };
  return (
        <Box
          sx={{
            mt: "17px",
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            gap: "59px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "38px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "NiramitBold",
                color: "#ABABAB",
                fontSize: "20px",
                lineHeight: "46px",
                letterSpacing: "0px",
                textTransform: "capitalize",
              }}
            >
              choose network and To receive 120 Perfect Money, please deposit
              100 Tether to the Tether address below:
            </Typography>

            <NetworkInputSelect
              editable
              options={["TRON", "BSC"]}
              value="TRON"
              onChange={(v) => console.log(v)}
              address={address}
            />
          </Box>

          <Box sx={{ mx: "auto" }}>
            <QrScannerTS onGenerate={handleQrValue}/>
          </Box>
        </Box>

  )
}

export default NetworkAndAddress