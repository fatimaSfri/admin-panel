import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

type StyledInputProps = {
  variantType?: "helpCenter";
};

const StyledInput = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "variantType",
})<StyledInputProps>(({ theme, variantType }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: theme.palette.primary.main ,
    borderRadius: "12px",
    height: variantType === "helpCenter" ? "80px" : "59px",
    color: "#fff",

    "& fieldset": {
      border: "none",
    },

    "& input": {
      padding:
      variantType === "helpCenter" ? "28px 0 28px 5px" : "0 26px",
      fontSize: "16px",
      fontFamily: "NiramitBold",
    },

    "& input::placeholder": {
      color: "#fff",
      opacity: 1,
    },
  },
}));

export default StyledInput;
