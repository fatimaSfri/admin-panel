import { Box, TextField, Typography, InputAdornment, IconButton } from '@mui/material';
import { useState } from 'react';
import eyes from "../assets/img/eyes.svg"
import eyesRed from "../assets/img/eyesRed.svg"

interface PasswordInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  strength?: string;
  showStrength?: boolean;
  showToggle?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  name:string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label = "Password :",
  placeholder = "Please Enter Your Password",
  value,
  onChange,
  onBlur,
  error = false,
  helperText = "The Password Is Incorrect",
  strength,
  showStrength = false,
  showToggle = false, 
  showPassword: externalShowPassword,
  onTogglePassword: externalOnToggle,
  name
}) => {
  const [internalShowPassword, setInternalShowPassword] = useState(false);
  const isControlled = externalShowPassword !== undefined && externalOnToggle !== undefined;
  const currentShowPassword = isControlled ? externalShowPassword : internalShowPassword;
  const togglePassword = isControlled ? externalOnToggle : () => setInternalShowPassword(prev => !prev);

  const iconColor = error ? '#F66066' : "#ABABAB";
  const iconSx = {
    color: iconColor,
    mr: 1,
    ...(error ? {} : { "&:hover": { color: "#fff" } }),
  };

  const endAdornment = showToggle ? (
    <InputAdornment position="end">
      <IconButton onClick={togglePassword} sx={iconSx}>
        <Box component="img" src={error ? eyesRed : eyes} alt="icon" sx={{mr: 0.5 }} />
      </IconButton>
    </InputAdornment>
  ) : null;

  return (
    <Box>
      {showStrength && strength ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontFamily:"NiramitBold", }}>
            {label}
          </Typography>
          <Typography sx={{ fontSize: { xs: '14px', lg: '16px' }, color: strength === 'Very Weak' ? '#F66066' : strength === 'Weak' ? '#FF6600' : '#6EC207', fontFamily:"NiramitBold", }}>
            {strength}
          </Typography>
        </Box>
      ) : (
        <Typography sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontFamily:"NiramitBold", }}>
          {label}
        </Typography>
      )}
      
      <TextField
        fullWidth
        placeholder={placeholder}
        name={name}
        type={showToggle ? (currentShowPassword ? "text" : "password") : "password"} 
        variant="outlined"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        helperText={error ? helperText : ""}
        InputProps={{
          sx: {
            bgcolor: "#242C39",
            borderRadius: "8px",
            color: "#fff",
            fontSize: { xs: '12px', lg: '14px' },
            p: "2px",
            "& input::placeholder": { color: "#fff", opacity: 1, fontSize: { xs: '12px', lg: '14px' }, fontFamily:"NiramitBold",},
          },
          endAdornment, 
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { border: error ? "2px solid #F66066" : "none" },
            "&.Mui-focused fieldset": { borderColor: error ? '#F66066' : 'none' },
          },
          "& .MuiFormHelperText-root.Mui-error": { 
            color: '#F66066', 
            fontSize: { xs: "12px", lg: "14px" }, 
            ml: '-1px' 
          },
        }}
      />
    </Box>
  );
};