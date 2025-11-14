// Step1.tsx
import { Box, Typography } from "@mui/material";
import BigBox from "./BigBox";
import CustomInput from "../CustomInput";

interface Props {
  goToStep: (step: number) => void;
}

const Step1 = ({ goToStep }: Props) => {
  return (
    <Box
      sx={{
        width: { xs: 11 / 12, lg: 12 / 12 },
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        border: "2px solid red",
        flexGrow: 1,
        alignItems: "center",
      }}
    >
      <BigBox>
        <Typography
          sx={{
            color: "white",
            fontFamily: "NiramitBold",
            fontSize: { xs: "20px", md: "22px", lg: "24px" },
          }}
        >
          Invoice Details :
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            send:
            <Box
              sx={{
                border: "2px solid red",
                display: "flex",
                gap: 1,
              }}
            >
              oioi
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Receive:
            <Box
              sx={{
                border: "2px solid red",
                display: "flex",
                gap: 1,
              }}
            >
              oioi
            </Box>
          </Box>
          <Box
            sx={{
              width:"100%",
              mx:"auto",
              bgcolor:"blueviolet",
              height:"1px",
              mt:"18px"
            }}
          ></Box>
          <Box>
            <CustomInput
            lable="Email :"
          placeholder="Please Enter Your Email"
          value=""
          name="email"
          ></CustomInput>
          </Box>
        </Box>
      </BigBox>
      {/* <Button variant="contained" onClick={() => goToStep(2)}>
      </Button> */}
    </Box>
  );
};

export default Step1;
