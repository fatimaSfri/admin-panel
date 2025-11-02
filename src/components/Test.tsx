// import {
//   Box,
//   Card,
//   IconButton,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { useState } from 'react'; // state برای showPassword و error!
// import { InputAdornment } from '@mui/material';
// import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'; // icon چشم باز.
// import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'; // icon چشم با خط – برگشت!

// const Test = () => {
//   const [showPassword, setShowPassword] = useState(false); 
//   const [error, setError] = useState(true); 

//   return (
//     <Box
//       sx={{
//         flexGrow: 1,
//         mt: 14,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         py: 4
//       }}
//     >
//       <Card
//         elevation={0}
//         sx={{
//           width: { xs: "80%", sm: "560px" },
//           backgroundColor: "rgba(250, 250, 250, 0.025)",
//           backdropFilter: "blur(20px)",
//           borderRadius: 10,
//           px: { xs: 2, lg: 6 },
//           py: 8,
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             gap: 2,
//           }}
//         >
//           <Typography
//             sx={{
//               fontFamily: "Niramit, sans-serif",
//               fontWeight: 700,
//               fontStyle: "normal",
//               fontSize: { xs: '30px', lg: '36px' },
//               lineHeight: "100%",
//               letterSpacing: "0%",
//               textTransform: "capitalize",
//               background: "linear-gradient(60deg, #1D8D94 30%, #99D9A6 70%)",
//               backgroundClip: "text",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               leadingTrim: "none",
//               textAlign: "center",
//             }}
//           >
//             login
//           </Typography>
//           <Box>
//             <Typography
//               sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}
//             >
//               Password :
//             </Typography>
//             <TextField
//               fullWidth
//               placeholder="Please Enter Your Password"
//               type={showPassword ? "text" : "password"} 
//               variant="outlined"
//               error={error} 
//               helperText={error ? "The Password Is Incorrect" : ""} 
//               InputProps={{
//                 sx: {
//                   bgcolor: "#242C39",
//                   borderRadius: "8px",
//                   color: "#fff",
//                   fontSize: { xs: '12px', lg: '14px' },
//                   p: "2px",
//                   "& input::placeholder": {
//                     color: "#fff",
//                     opacity: 1,
//                     fontSize: { xs: '12px', lg: '14px' },
//                   },
//                 },
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       onClick={() => setShowPassword((prev) => !prev)}
//                       sx={{
//                         color: error ? '#F66066' : "#ABABAB",
//                         mr: 1,
//                       }}
//                     >
//                       {showPassword ? (
//                         <VisibilityOffOutlinedIcon /> 
//                       ) : (
//                         <RemoveRedEyeOutlinedIcon /> 
//                       )}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { 
//                     border: error ? "2px solid red" : "none"
//                   },
//                   "&.Mui-focused fieldset": { borderColor: error ? '#F66066' : 'none' },
//                 },
//                 "& .MuiFormHelperText-root.Mui-error": { color: '#F66066' },
//               }}
//             />
//           </Box>
//         </Box>
//       </Card>
//     </Box>
//   )
// }

// export default Test;



import {
  Box,
  Card,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from 'react';
import { InputAdornment } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const Test = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // state ساده برای toggle تکرار
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // dummy state برای value
  const [strength, setStrength] = useState('');
  
  const calculateStrength = (pass: string) => {
    if (pass.length < 6) return 'Very Weak';
    if (pass.length < 11) return 'Weak';
    return 'Strong!';
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setStrength(calculateStrength(value));
  };
  
  // dummy handler برای تکرار (فعلاً خالی، بعداً پر کن!)
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        mt: 14,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 4
      }}
    >
      <Card
        elevation={0}
        sx={{
          width: { xs: "80%", sm: "560px" },
          backgroundColor: "rgba(250, 250, 250, 0.025)",
          backdropFilter: "blur(20px)",
          borderRadius: 10,
          px: { xs: 2, lg: 6 },
          py: 8,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Niramit, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: { xs: '30px', lg: '36px' },
              lineHeight: "100%",
              letterSpacing: "0%",
              textTransform: "capitalize",
              background: "linear-gradient(60deg, #1D8D94 30%, #99D9A6 70%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              leadingTrim: "none",
              textAlign: "center",
            }}
          >
            login
          </Typography>
          
          {/* بخش پسورد اصلی */}
          <Box>
            <Box sx={{display:'flex', justifyContent:'space-between',}}>
              <Typography
                sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}
              >
                Password :
              </Typography>
              {strength && (
                <Typography
                  sx={{
                    fontSize: { xs: '14px', lg: '16px' },
                    color: strength === 'Very Weak' ? '#F66066' : strength === 'Weak' ? '#FF6600'
                    : '#6EC207',
                    fontWeight: 'bold',
                  }}
                >
                  {strength}
                </Typography>
              )}
            </Box>
            <Box>
              <TextField
                fullWidth
                placeholder="Please Enter Your Password" // تصحیح placeholder (قبلاً Email بود!)
                type={showPassword ? "text" : "password"}
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
                InputProps={{
                  sx: {
                    bgcolor: "#242C39",
                    borderRadius: "8px",
                    color: "#fff",
                    fontSize: { xs: '12px', lg: '14px' },
                    p: "2px",
                    "& input::placeholder": {
                      color: "#fff",
                      opacity: 1,
                      fontSize: { xs: '12px', lg: '14px' },
                    },
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                        sx={{
                          color: "#ABABAB",
                          mr: 1,
                          "&:hover": { color: "#fff" },
                        }}
                      >
                        {showPassword ? (
                          <VisibilityOffOutlinedIcon />
                        ) : (
                          <RemoveRedEyeOutlinedIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { border: "none" },
                  },
                }}
              />
            </Box>
          </Box>

          {/* بخش تکرار پسورد – کپی استایل‌ها، تازه و اورجینال! */}
          <Box>
            <Typography
              sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}
            >
              Confirm Password :
            </Typography>
            <Box>
              <TextField
                fullWidth
                placeholder="Please Confirm Your Password"
                type={showConfirmPassword ? "text" : "password"}
                variant="outlined"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange} // dummy handler
                InputProps={{
                  sx: {
                    bgcolor: "#242C39",
                    borderRadius: "8px",
                    color: "#fff",
                    fontSize: { xs: '12px', lg: '14px' },
                    p: "2px",
                    "& input::placeholder": {
                      color: "#fff",
                      opacity: 1,
                      fontSize: { xs: '12px', lg: '14px' },
                    },
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        sx={{
                          color: "#ABABAB",
                          mr: 1,
                          "&:hover": { color: "#fff" },
                        }}
                      >
                        {showConfirmPassword ? (
                          <VisibilityOffOutlinedIcon />
                        ) : (
                          <RemoveRedEyeOutlinedIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { border: "none" },
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  )
}

export default Test;