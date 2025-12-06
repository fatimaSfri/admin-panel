import { Box, Typography } from "@mui/material";
import SearchInput from "./SearchInput";
import TableContent from "./TableContent";


const TableBox = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <SearchInput />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "22px",
          mt: "41px",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "NiramitSemiBold",
            fontSize: "24px",
            lineHeight: "100%",
            letterSpacing: "0",
            textTransform: "capitalize",
            opacity: 1,
            ml: "2px",
          }}
        >Latest transactions</Typography>

        <TableContent/>
      </Box>
    </Box>
  );
};

export default TableBox;
