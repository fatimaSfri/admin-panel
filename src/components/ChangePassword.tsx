import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from 'react';


const ChangePassword = () => {
  const [showConfirmPassword] = useState(false); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
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
           py:4
         }}
       >
         <Card
           elevation={0}
           sx={{
             width: { xs: "80%", sm: "560px" },
             backgroundColor: "rgba(250, 250, 250, 0.025)",
             backdropFilter: "blur(20px)",
             borderRadius: 10,
             px: {xs:2 ,lg:6},
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
              mb:4
            }}
          >
            Change Password
          </Typography>
          
          <Box>
            <Box sx={{display:'flex', justifyContent:'space-between',}}>
              <Typography
                sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}
              >
                New Password:
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
                placeholder="Please Enter Your Password" 
                type= "password"
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
                  // endAdornment: (
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       onClick={() => setShowPassword((prev) => !prev)}
                  //       sx={{
                  //         color: "#ABABAB",
                  //         mr: 1,
                  //         "&:hover": { color: "#fff" },
                  //       }}
                  //     >
                  //       {showPassword ? (
                  //         <VisibilityOffOutlinedIcon />
                  //       ) : (
                  //         <RemoveRedEyeOutlinedIcon />
                  //       )}
                  //     </IconButton>
                  //   </InputAdornment>
                  // ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { border: "none" },
                  },
                }}
              />
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}
            >
             Repeat New Password :
            </Typography>
            <Box>
              <TextField
                fullWidth
                placeholder="Please Repeat Your Password"
                type={showConfirmPassword ? "text" : "password"}
                variant="outlined"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
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
                  // endAdornment: (
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       onClick={() => setShowConfirmPassword((prev) => !prev)}
                  //       sx={{
                  //         color: "#ABABAB",
                  //         mr: 1,
                  //         "&:hover": { color: "#fff" },
                  //       }}
                  //     >
                  //       {showConfirmPassword ? (
                  //         <VisibilityOffOutlinedIcon />
                  //       ) : (
                  //         <RemoveRedEyeOutlinedIcon />
                  //       )}
                  //     </IconButton>
                  //   </InputAdornment>
                  // ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { border: "none" },
                  },
                }}
              />
            </Box>
          </Box>
           <Button
            fullWidth
            sx={{
              height: 60,
              backgroundColor: "#1D8D94",
              boxShadow: "0px 0px 20px 0px #1D8D9480",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              borderRadius: 2,
              mb: 2,
              mt: 3.5 ,
              textTransform: "none",
              transition: "all 0.3s ease-out",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0px 0px 25px 0px #1D8D9480",
                backgroundColor: "#1A7A7D",
              },
              "&:active": {
                transform: "scale(0.98)",
              },
            }}
          >
           Confirm
          </Button>
        </Box>
        
      </Card>
    </Box>
  )
}

export default ChangePassword;