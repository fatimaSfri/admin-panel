// import { Box, TextField, Typography } from "@mui/material"

// type InputItem = {
//   label: string;
//   value: string;
// };

// type Props = {
//   inputItems: InputItem[];
//   mt?:string
// };

// const HorizontalInput:React.FC<Props> = ({
//   inputItems,
//   mt="14px"
// }) => {

//   return (
//    <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "18px",
//           mt,
//         }}
//       >
//         {inputItems.map((item , index) => (
//         <Box
//           key={index}
//           sx={{
//             width: "100%",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: { xs: "16px", lg: "20px" },
//               color: "#ABABAB",
//               fontFamily: "NiramitBold",
//               textTransform: "capitalize",
//               lineHeight:"100%",
//               letterSpacing:"0px"
//             }}
//           >
//            {item.label}
//           </Typography>
//           <TextField
//             variant="outlined"
//              value={item.value}
//             sx={{
//               "& .MuiInputBase-input": {
//                 fontFamily: "NiramitBold",
//                 fontSize: "16px",
//                 lineHeight: "100%",
//                 letterSpacing: "4px",
//                 textTransform: "capitalize",
//                 color: "#fff",
//               },
//               bgcolor: "#242C39",
//               borderRadius: "8px",
//               height: "57px",
//               width: "80.55%",
//               maxHeight: "791px",
//               boxSizing: "border-box",
//               fontSize: { xs: "12px", lg: "16px" },
//               px: "2px",
//               "& .MuiOutlinedInput-root": {
//                 padding: 0,
//                 "& fieldset": {
//                   border: "none",
//                 },
//                 "&:hover fieldset": {
//                   border: "none",
//                 },
//                 "&.Mui-focused fieldset": {
//                   border: "none",
//                 },
//                 boxShadow: "none",
//               },

//               "& .MuiOutlinedInput-root.Mui-focused": {
//                 boxShadow: "none",
//               },
//             }}
//           />
//         </Box>
//       ))}

//       </Box>
//   )
// }

// export default HorizontalInput

import {
  Box,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import copyIcon from "../../../assets/img/copyIcon.svg";

type InputItem = {
  label: string;
  value: string;
  copy?: boolean;
};

type Props = {
  inputItems: InputItem[];
  mt?: string;
};

const HorizontalInput: React.FC<Props> = ({ inputItems, mt = "14px" }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        mt,
      }}
    >
      {inputItems.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "16px", lg: "20px" },
              color: "#ABABAB",
              fontFamily: "NiramitBold",
              textTransform: "capitalize",
              lineHeight: "100%",
            }}
          >
            {item.label}
          </Typography>

          <TextField
            multiline
            variant="outlined"
            value={item.value}
            InputProps={{
              endAdornment: item.copy && (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => copyToClipboard(item.value)}
                    sx={{ color: "#fff" }}
                  >
                    <Box
                      component="img"
                      src={copyIcon}
                      sx={{
                        p: "11px",
                        bgcolor: "#2A3342",
                        borderRadius: "8px",
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                whiteSpace: "normal",
                wordBreak: "break-word",
              },
            }}
            sx={{
              "& .MuiInputBase-input": {
                fontFamily: "NiramitBold",
                fontSize: "16px",
                 lineHeight:"36px",
                letterSpacing: "4px",
                textTransform: "capitalize",
                color: "#fff",
                whiteSpace: "normal",
                wordBreak: "break-word",
                padding: "16px",
              },

              bgcolor: "#242C39",
              borderRadius: "8px",
              minHeight: "57px",
              height: "auto",
              width: "80.55%",
              boxSizing: "border-box",
              px: "2px",
              "& .MuiOutlinedInput-root": {
                padding: 0,
                "& fieldset": { border: "none" },
                "&:hover fieldset": { border: "none" },
                "&.Mui-focused fieldset": { border: "none" },
                boxShadow: "none",
              },

              "& .MuiOutlinedInput-root.Mui-focused": {
                boxShadow: "none",
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalInput;
