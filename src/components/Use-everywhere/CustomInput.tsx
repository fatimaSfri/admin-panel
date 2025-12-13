import { Box, IconButton, TextField, Typography } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface EmailInputProps {
  value: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean; 
  helperText?: string;
  lable?:string;
  placeholder?:string;
  mb?:string
  multiline?: boolean;
  rows?: number;
}

const CustomInput: React.FC<EmailInputProps> = ({
  value,
  name,
  onChange,
  onBlur,
  error = false,
  helperText ,
  lable='Email :',
  placeholder='Please Enter Your Email',
  mb="15px",
  multiline = false,
  rows,
}) => {
  return (
    <Box>
      <Typography sx={{ mb , fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB",  fontFamily:"NiramitBold", textTransform:"capitalize" }}>
       {lable}
      </Typography>
      <TextField
        value={value ?? ''}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        fullWidth
        placeholder={placeholder}
        variant="outlined"
        error={error}
        multiline={multiline}
        rows={multiline ? rows : undefined}
        helperText={error ? helperText : ""}
        InputProps={{
          sx: {
            bgcolor: "#242C39",
            borderRadius: "8px",
           height: multiline ? "149px" : "57px",
            boxSizing:"border-box",
            color: "#fff",
            alignItems: multiline ? "flex-start" : "center",
            pt: multiline ? "12px" : "15px", 
            px: multiline ? "18px" : "4px", 
            py: multiline ? "12px" : 0,
            "& input:-webkit-autofill, & textarea:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 1000px #242C39 inset !important", 
                WebkitTextFillColor: "#fff !important", 
                transition: "background-color 5000s ease-in-out 0s", 
            },
            "& textarea::placeholder, & input::placeholder": {
              color: "#fff",
              opacity: 1,
              fontSize: { xs: '12px', lg: '14px' },
              fontFamily:"NiramitBold",
              textTransform:"capitalize"
            },
            fontSize: { xs: '12px', lg: '16px' },
          },
          endAdornment: error ? (
            <IconButton aria-label="clear" sx={{ color: '#F66066', mr: 1 }}>
              <HighlightOffIcon sx={{ fontSize: 22 }} />
            </IconButton>
          ) : null,
        }}
        sx={{
          mb: 2.35,
          "& .MuiOutlinedInput-root": {
            "& fieldset": { border: error ? "2px solid #F66066" : "none" },
          },
          "& .MuiFormHelperText-root.Mui-error": { color: '#F66066', fontSize: { xs: "12px", lg: "14px" }, ml: '-1px' },

        }}
      />
    </Box>
  );
};

export default CustomInput;

