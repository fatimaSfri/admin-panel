import {
  Box,
  Card,
  TextField,
  Button,
  Typography,
  Link,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import CustomizedCheckbox from "./CustomCheckbox";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const LoginUI = () => {
  const [showPassword, setShowPassword] = useState(false);
   const [error] = useState(false);
   const [errorPas] = useState(false); 
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
              fontSize:{xs:'30px' , lg:'36px'},
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
         <Box>
            <Typography
              sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}
            >
              Email :
            </Typography>
            <TextField
              fullWidth
              placeholder="Please Enter Your Email"
              variant="outlined"
              error={error}
              helperText={error ? 
                "The Email Is Incorrect"
                : ""} 
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
                  fontSize: { xs: '1px', lg: '1px' }
                },
                  fontSize: { xs: '12px', lg: '14px' },
                  p: "2px",
                },
                endAdornment: error ? ( 
                  <IconButton
                    aria-label="clear"
                   sx={{ color: '#F66066' , mr:1 }}
                  >
                    <HighlightOffIcon sx={{ fontSize: 22 }} />
                  </IconButton>
                ) : null,
              }}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { 
                    border: error ? "2px solid #F66066" : "none" 
                  },
                },
                "& .MuiFormHelperText-root.Mui-error": { color: '#F66066' , fontSize: { xs: "12px", lg: "14px" },ml:'-1px' },
              }}
            />
          </Box>
         <Box>
            <Typography
              sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}
            >
              Password :
            </Typography>
            <TextField
              fullWidth
              placeholder="Please Enter Your Password"
              type={showPassword ? "text" : "password"} 
              variant="outlined"
              error={errorPas} 
              helperText={errorPas ? "The Password Is Incorrect" : ""} 
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
                        color: errorPas ? '#F66066' : "#ABABAB",
                        mr: 1,
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
                  "& fieldset": { 
                    border: errorPas ? "2px solid red" : "none"
                  },
                  "&.Mui-focused fieldset": { borderColor: errorPas ? '#F66066' : 'none' },
                },
                "& .MuiFormHelperText-root.Mui-error": { color: '#F66066', fontSize: { xs: "12px", lg: "14px" },ml:'-1px' },
              }}
            />
          </Box>
          {/* checkbox */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <CustomizedCheckbox></CustomizedCheckbox>

            <Typography
              variant="body2"
              sx={{
                fontSize:{xs:'12px' , sm:'14px' , lg:'16px'},
                color: "#1D8D94",
                cursor: "pointer",
                fontWeight: "bold",
                textDecoration: "underline",
                textUnderlineOffset: "1px",
              }}
            >
              Forgot Your Password ?
            </Typography>
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
              mb: 2.5,
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
            Login
          </Button>
          <Typography
            sx={{
              fontFamily: "Niramit, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
               fontSize:{xs:'12px' , sm:'14px' , lg:'16px'},
              lineHeight: "100%",
              letterSpacing: "0%",
              textTransform: "capitalize",
              leadingTrim: "none",
              color: "#ABABAB",
              textAlign: "center",
            }}
          >
            dont have an account?{" "}
            <Link
              href="/auth/register"
              underline="hover"
              sx={{
                fontWeight: 700,
                color: "#1D8D94",
                cursor: "pointer",
              }}
            >
              register
            </Link>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default LoginUI;
