import { Box, Typography } from "@mui/material";


interface ExchangeFormProps {
  info: readonly string[];
}

const ExchangeConditions: React.FC<ExchangeFormProps> = ({ info }) => {
  return (
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
    </Box>
  );
};

export default ExchangeConditions;
