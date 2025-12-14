// import { styled } from "@mui/material/styles";
// import TextField from "@mui/material/TextField";

// const StyledInput = styled(TextField)(({ theme }) => ({
//   "& .MuiOutlinedInput-root": {
//     backgroundColor: theme.palette.primary.main,
//     borderRadius: "10px",
//     height: "59px",
//     color: "#fff",
//     position: "relative",
//     "& fieldset": {
//       border: "none",
//     },

//     "&.Mui-error fieldset": {
//       border: "2px solid #F66066",
//     },

//     "& input": {
//       padding: "0 26px",
//       fontSize: "16px",
//       fontFamily: "NiramitBold",
//       textTransform: "capitalize",
//       overflow: "hidden",
//       textOverflow: "ellipsis",

//       [theme.breakpoints.down("md")]: {
//         fontSize: "14px",
//       },
//     },

//     "& input::placeholder": {
//       color: "#fff",
//       opacity: 1,
//       fontFamily: "NiramitBold",
//       fontSize: "16px",
//       textTransform: "capitalize",
//       [theme.breakpoints.down("md")]: {
//         fontSize: "14px",
//       },
//     },
//   },

//   "& .MuiFormHelperText-root.Mui-error": {
//     color: "#F66066",
//     fontSize: "14px",
//     marginLeft: "-1px",
//     [theme.breakpoints.down("md")]: {
//       fontSize: "12px",
//     },
//   },
// }));

// export default StyledInput;






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
