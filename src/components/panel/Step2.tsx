// Step1.tsx
import { Box, Tooltip, Typography } from "@mui/material";
import BigBox from "./BigBox";
import CustomInput from "../CustomInput";
import CheckBox from "./CheckBox";
import { useState } from "react";
import { CustomButton } from "../CustomButton";
import { useInfoSelector } from "../../store/hooks";

interface Props {
  goToStep: (step: number) => void;
}

const Step1 = ({ goToStep }: Props) => {
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

  const exchangeData = useInfoSelector((state) => state.exchange.data);
  const currentUser = useInfoSelector((state) => state.user.items.length > 0);

  return (
    <Box
      sx={{
        width: { xs: 11 / 12, lg: 12 / 12 },
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        flexGrow: 1,
        border: "2px solid red",
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
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* ====== SEND ====== */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                gap: 2,
                color: "#ABABAB",
                fontFamily: "NiramitBold",
                fontSize: "20px",
              }}
            >
              <Typography
                sx={{
                  whiteSpace: "nowrap",
                  fontFamily: "NiramitBold",
                  fontSize: "20px",
                  color: "#ABABAB",
                }}
              >
                Send:
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  minWidth: 0,
                  justifyContent: { xs: "flex-start", sm: "flex-end" },
                  whiteSpace: { xs: "normal", sm: "nowrap" },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                <Tooltip title={exchangeData.fromAmount} arrow placement="top">
                  <Typography
                    sx={{
                      fontFamily: "NiramitBold",
                      fontSize: "20px",
                      color: "white",
                      whiteSpace: { xs: "normal", sm: "nowrap" },
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: { xs: "100%", sm: "auto" },
                      cursor: "default",
                    }}
                  >
                    {exchangeData.fromAmount}
                  </Typography>
                </Tooltip>

                <Box
                  component="img"
                  src={exchangeData.fromCurrency.icon}
                  alt={exchangeData.fromCurrency.value}
                  sx={{
                    width: 25,
                    height: 25,
                    flexShrink: 0,
                    objectFit: "contain",
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "NiramitBold",
                    fontSize: "20px",
                    color: "white",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  {exchangeData.fromCurrency.value}
                </Typography>
              </Box>
            </Box>

            {/* ====== RECEIVE ====== */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                gap: 2,
                color: "#ABABAB",
                fontFamily: "NiramitBold",
                fontSize: "20px",
              }}
            >
              <Typography
                sx={{
                  whiteSpace: "nowrap",
                  fontFamily: "NiramitBold",
                  fontSize: "20px",
                  color: "#ABABAB",
                }}
              >
                Receive:
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  minWidth: 0,
                  justifyContent: { xs: "flex-start", sm: "flex-end" },
                  whiteSpace: { xs: "normal", sm: "nowrap" },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                <Tooltip title={exchangeData.toAmount} arrow placement="top">
                  <Typography
                    sx={{
                      fontFamily: "NiramitBold",
                      fontSize: "20px",
                      color: "white",
                      whiteSpace: { xs: "normal", sm: "nowrap" },
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: { xs: "100%", sm: "auto" },
                      cursor: "default",
                    }}
                  >
                    {exchangeData.toAmount}
                  </Typography>
                </Tooltip>

                <Box
                  component="img"
                  src={exchangeData.toCurrency.icon}
                  alt={exchangeData.toCurrency.value}
                  sx={{
                    width: 25,
                    height: 25,
                    flexShrink: 0,
                    objectFit: "contain",
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "NiramitBold",
                    fontSize: "20px",
                    color: "white",
                    textTransform: "capitalize",
                    whiteSpace: "nowrap",
                  }}
                >
                  {exchangeData.toCurrency.value}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              mx: "auto",
              bgcolor: "#596B89",
              height: "1px",
              mt: "18px",
            }}
          ></Box>
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

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "NiramitBold",
              fontSize: { xs: "18px", md: "20px" },
              pb: "23px",
            }}
          >
            Exchange Conditions:
          </Typography>
          {info.map((text, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                gap: "13px",

                lineHeight: "29px",
              }}
            >
              {/* circle */}
              <Box
                sx={{
                  minWidth: "25px",
                  height: "25px",
                  background: "#1D8D94",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "14px",
                  fontFamily: "NiramitBold",
                  flexShrink: 0,
                  mt: "3px",
                }}
              >
                {index + 1}
              </Box>

              {/* text */}
              <Typography
                sx={{
                  color: "white",
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "29px",
                  textTransform: "capitalize",
                  margin: 0,
                  padding: 0,
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
              >
                {text}
              </Typography>
            </Box>
          ))}
          <Box sx={{ my: "19px" }}>
            <CheckBox
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            ></CheckBox>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomButton
            label="Confirm"
            mt={-0.25}
            mb={0}
            onClick={() => goToStep(2)}
          ></CustomButton>
        </Box>
      </BigBox>
      {/* <Button variant="contained" onClick={() => goToStep(2)}>
      </Button> */}
    </Box>
  );
};

export default Step1;
