import { Box, Tooltip, Typography } from "@mui/material";

type CurrencyType = {
  icon: string;
  value: string;
};

type RowItemProps = {
  label: string;
  amount: string | number;
  currency: CurrencyType;
  isReceive?: boolean;
};

const SendReceiveItems = ({
  label,
  amount,
  currency,
  isReceive,
}: RowItemProps) => {
  return (
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
      {/* Label */}
      <Typography
        sx={{
          whiteSpace: "nowrap",
          fontFamily: "NiramitBold",
          fontSize: "20px",
          color: "#ABABAB",
        }}
      >
        {label}
      </Typography>

      {/* Amount + Currency */}
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
        <Tooltip title={amount} arrow placement="top">
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
            {amount}
          </Typography>
        </Tooltip>

        <Box
          component="img"
          src={currency.icon}
          alt={currency.value}
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
            textTransform: isReceive ? "capitalize" : "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          {currency.value}
        </Typography>
      </Box>
    </Box>
  );
};

export default SendReceiveItems;
