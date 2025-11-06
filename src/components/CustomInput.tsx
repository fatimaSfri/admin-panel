import { Box, IconButton, TextField, Typography } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface EmailInputProps {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean; 
  helperText?: string;
  lable?:string;
  placeholder?:string; 
}

const CustomInput: React.FC<EmailInputProps> = ({
  value,
  name,
  onChange,
  onBlur,
  error = false,
  helperText ,
  lable='Email :',
  placeholder='Please Enter Your Email'
}) => {
  return (
    <Box>
      <Typography sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}>
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
              fontWeight: 'bold'
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

export default CustomInput;