
import React, { useState } from "react";
import {
  Box,
  Card,
  TextField,
  Button,
  Typography,
   IconButton,
} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const  ForgetPassword = () => {

 const [error] = useState(false);
 
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
               mb: 4.5,
            }}
          >
           Forget Password
          </Typography>
         <Box>
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
              mt: -1.2 ,
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
  );
};

export default ForgetPassword;
