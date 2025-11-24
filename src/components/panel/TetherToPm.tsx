import { Box, Tooltip, Typography } from "@mui/material";
import BigBox from "./BigBox";
import PaymentTimer from "./Timer";
import { useInfoSelector } from "../../store/hooks";
import NetworkInputSelect from "./DropDown&Input";
import QrScannerTS from "./QrScanner";
import { CheckBox } from "@mui/icons-material";
import { CustomButton } from "../CustomButton";

interface Props {
  goToStep: (step: number) => void;
}

const TetherToPm = ({ goToStep }: Props) => {
  const exchangeData = useInfoSelector((state) => state.exchange.data);
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
            flexDirection:{xs:"column",sm:"row"},
            gap:{xs:"40px" , sm:"10px"},
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
            gap: 2,
            mt: "11px",
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
          <Box
            sx={{
              width: "100%",
              mx: "auto",
              bgcolor: "#596B89",
              height: "1px",
              mt: "18px",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            mt: "17px",
            display: "flex",
            flexDirection:{xs:"column-reverse" ,md:"row"},
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
                letterSpacing: "0%",
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
              address="TJ8f92jf92j9j203jf209jf203"
            />
          </Box>

          <Box sx={{mx:"auto"}}>
            <QrScannerTS />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            mt: "6px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "NiramitBold",
              fontSize: { xs: "18px", md: "20px" },
              pb: "21px",
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
        </Box>

        <Box sx={{display:"flex", gap:"10px",
          justifyContent:"center" , alignItems:"center",flexDirection:{xs:"column" , md:"row"}
        }}>
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
            color="#"
          ></CustomButton>
        </Box>

      </BigBox>
    </Box>
  );
};

export default TetherToPm;
