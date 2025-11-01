
import React, { useState } from "react";
import {
  Box,
  Card,
  TextField,
  Button,
  Typography,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import {  useInfoDispatch } from "../store/hooks";
import { type UserInfo, addUser } from "../store/UserSlice";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const RegisterUI = () => {
  const dispatch = useInfoDispatch();

  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(''); 
  const [error] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();



    const newUser: UserInfo = {
      userName: userName,
      email: email,
      password: password,
    };

    setTimeout(() => {
      console.log(
        "localStorage after delay:",
        localStorage.getItem("persist:root")
      );
    }, 1000); 
    dispatch(addUser(newUser));
    console.log("کاربر اضافه شد:", newUser); 

    setUserName("");
    setEmail("");
    setPassword("");

    alert("ثبت‌نام موفق!");

  };

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
  //  onChange={(e) => setUserName(e.target.value)} 
 
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
           Register
          </Typography>
         <Box onSubmit={handleSubmit}>
          <Box>
            <Typography
              sx={{ mb: 2, fontSize:{xs:'14px' , lg:'16px'}, color: "#ABABAB", fontWeight: "bold" }}
            >
              Name :
            </Typography>
            <TextField
              fullWidth
              placeholder="Please Enter Your Name"
              variant="outlined"
              InputProps={{
                sx: {
                  bgcolor: "#242C39",
                  borderRadius: "8px",
                  color: "#fff",
                  "& input::placeholder": {
                    color: "#fff",
                    opacity: 1,
                   fontSize:{xs:'12px' , lg:'14px'},
                  },
                 fontSize:{xs:'12px' , lg:'14px'},
                  p: "2px",
                },
              }}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { border: "none" },
                },
              }}
            />
          </Box>
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
        <Box >
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
                placeholder="Please Enter Your Email"
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
           Register
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
             Have An Account?{" "}
            <Link
              href="/auth/register"
              underline="hover"
              sx={{
                fontWeight: 700,
                color: "#1D8D94",
                cursor: "pointer",
              }}
            >
              Login
            </Link>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default RegisterUI;
