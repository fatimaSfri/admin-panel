import { Box, TextField, Typography } from "@mui/material"


type InputItem = {
  label: string;
  value: string;
};


type Props = {
  inputItems: InputItem[]; 
};

const HorizontalInput:React.FC<Props> = ({
  inputItems
}) => {

  return (
   <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          mt: "14px",
        }}
      >
        {inputItems.map((item , index) => (
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
              lineHeight:"100%",
              letterSpacing:"0px"
            }}
          >
           {item.label}
          </Typography>
          <TextField
            variant="outlined"
             value={item.value}
            sx={{
              "& .MuiInputBase-input": {
                fontFamily: "NiramitBold",
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "4px",
                textTransform: "capitalize",
                color: "#fff",
              },
              bgcolor: "#242C39",
              borderRadius: "8px",
              height: "57px",
              width: "80.55%",
              maxHeight: "791px",
              boxSizing: "border-box",
              fontSize: { xs: "12px", lg: "16px" },
              px: "2px",
              "& .MuiOutlinedInput-root": {
                padding: 0,
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
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
  )
}

export default HorizontalInput