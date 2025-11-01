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

const LoginUI = () => {
  const [showPassword, setShowPassword] = useState(false);
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
              sx={{ mb: 2, fontSize:{xs:'14px' , lg:'16px'}, color: "#ABABAB", fontWeight: "bold" }}
            >
              Email :
            </Typography>
            <TextField
              fullWidth
              placeholder="Please Enter Your Email"
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
              sx={{ mb: 2,fontSize:{xs:'14px' , lg:'16px'}, color: "#ABABAB", fontWeight: "bold" }}
            >
              Password :
            </Typography>
            <TextField
              fullWidth
              placeholder="Please Enter Your Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              InputProps={{
                sx: {
                  bgcolor: "#242C39",
                  borderRadius: "8px",
                  color: "#fff",
                   fontSize:{xs:'12px' , lg:'14px'},
                  p: "2px",
                  "& input::placeholder": {
                    color: "#fff",
                    opacity: 1,
                     fontSize:{xs:'12px' , lg:'14px'},
                  },
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      sx={{
                        color: "#ABABAB",
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
