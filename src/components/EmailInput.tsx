// import { Box, IconButton, TextField, Typography } from "@mui/material"
// import { useState } from "react";
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';

// interface ValidationProps{
//    value:string;
//    name:string;
//    change:any;
// }

// const EmailInput:React.FC<ValidationProps> = ({
//   value,
//   name,
//  change
// }) => {
//     const [error] = useState(false); 

//   return (
//      <Box>
//             <Typography
//               sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}
//             >
//               Email :
//             </Typography>
//             <TextField
//               value={value}
//               name={name}
//               onChange={change}
//               fullWidth
//               placeholder="Please Enter Your Email"
//               variant="outlined"
//               error={error}
//               helperText={error ? 
//                 "The Email Is Incorrect"
//                 : ""} 
//               InputProps={{
//                 sx: {
//                   bgcolor: "#242C39",
//                   borderRadius: "8px",
//                   color: "#fff",
//                   "& input::placeholder": {
//                     color: "#fff",
//                     opacity: 1,
//                     fontSize: { xs: '12px', lg: '14px' },
//                   },
//                   '& .MuiFormHelperText-root': { 
//                   fontSize: { xs: '1px', lg: '1px' }
//                 },
//                   fontSize: { xs: '12px', lg: '14px' },
//                   p: "2px",
//                 },
//                 endAdornment: error ? ( 
//                   <IconButton
//                     aria-label="clear"
//                    sx={{ color: '#F66066' , mr:1 }}
//                   >
//                     <HighlightOffIcon sx={{ fontSize: 22 }} />
//                   </IconButton>
//                 ) : null,
//               }}
//               sx={{
//                 mb: 2,
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { 
//                     border: error ? "2px solid #F66066" : "none" 
//                   },
//                 },
//                 "& .MuiFormHelperText-root.Mui-error": { color: '#F66066' , fontSize: { xs: "12px", lg: "14px" },ml:'-1px' },
//               }}
//             />
//           </Box>
//   )
// }

// export default EmailInput



import { Box, IconButton, TextField, Typography } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface EmailInputProps {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // type دقیق!
  error?: boolean; // از formik
  helperText?: string; // از formik.errors
}

const EmailInput: React.FC<EmailInputProps> = ({
  value,
  name,
  onChange,
  error = false, // default false
  helperText = "The Email Is Incorrect",
}) => {
  return (
    <Box>
      <Typography sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}>
        Email :
      </Typography>
      <TextField
        value={value}
        name={name}
        onChange={onChange}
        fullWidth
        placeholder="Please Enter Your Email"
        variant="outlined"
        error={error}
        helperText={error ? helperText : ""}
        InputProps={{
          sx: {
            bgcolor: "#242C39",
            borderRadius: "8px",
            color: "#fff",
            "& input::placeholder": {
              color: "#fff",
              opacity: 1,
              fontSize: { xs: '12px', lg: '14px' },
            },
            '& .MuiFormHelperText-root': {
              fontSize: { xs: '1px', lg: '1px' } // اگه لازم نیست، بردار
            },
            fontSize: { xs: '12px', lg: '14px' },
            p: "2px",
          },
          endAdornment: error ? (
            <IconButton aria-label="clear" sx={{ color: '#F66066', mr: 1 }}>
              <HighlightOffIcon sx={{ fontSize: 22 }} />
            </IconButton>
          ) : null,
        }}
        sx={{
          mb: 2,
          "& .MuiOutlinedInput-root": {
            "& fieldset": { border: error ? "2px solid #F66066" : "none" },
          },
          "& .MuiFormHelperText-root.Mui-error": { color: '#F66066', fontSize: { xs: "12px", lg: "14px" }, ml: '-1px' },
        }}
      />
    </Box>
  );
};

export default EmailInput;