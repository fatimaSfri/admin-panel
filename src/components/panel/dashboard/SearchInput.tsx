import { Box, InputAdornment, TextField } from "@mui/material";
import searchIcon from "../../../assets/img/search-icon.svg"

const SearchInput = () => {
  return (
 <TextField
        variant="outlined"
        fullWidth
        placeholder="Search..."
        InputProps={{
          sx: {
            textAlign: "left",
            bgcolor: "#242C39",
            borderRadius: "10px",
            height: "57px",
            fontSize: "16px",
            boxSizing: "border-box",
            p: "19px 10px 18px 19px",
            color: "#fff",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },

            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },

            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },

            "& input::placeholder": {
              color: "#fff",
              fontFamily: "NiramitSemiBold",
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0",
              textTransform: "capitalize",
              opacity: 1,
              pl: "2px",
            },
          },

          startAdornment: (
            <InputAdornment position="start">
              <Box
                component="img"
                src={searchIcon}
                sx={{ width: 20, height: 20 }}
              />
            </InputAdornment>
          ),
        }}
      />
  )
}

export default SearchInput