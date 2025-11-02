// // components/PasswordInput.tsx
// import { Box, TextField, Typography, InputAdornment, IconButton } from '@mui/material';
// import { useState } from 'react';
// import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
// import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

// interface PasswordInputProps {
//   label?: string; // default "Password :"
//   placeholder?: string; // default "Please Enter Your Password"
//   value?: string;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   error?: boolean;
//   helperText?: string; // برای error message
//   strength?: string; // optional: 'Very Weak' | etc.
//   showStrength?: boolean; // default false – فقط اگه true باشه strength نشون بده
//   showPassword?: boolean; // controlled از parent، یا internal
//   onTogglePassword?: () => void; // controlled toggle
// }

// export const PasswordInput: React.FC<PasswordInputProps> = ({
//   label = "Password :",
//   placeholder = "Please Enter Your Password",
//   value,
//   onChange,
//   error = false,
//   helperText = "The Password Is Incorrect",
//   strength,
//   showStrength = false,
//   showPassword: externalShowPassword, // controlled
//   onTogglePassword: externalOnToggle,
// }) => {
//   const [internalShowPassword, setInternalShowPassword] = useState(false); // اگه controlled نباشه
//   const isControlled = externalShowPassword !== undefined && externalOnToggle !== undefined;
//   const showPassword = isControlled ? externalShowPassword : internalShowPassword;
//   const togglePassword = isControlled ? externalOnToggle : () => setInternalShowPassword(!internalShowPassword);

//   const iconColor = error ? '#F66066' : '#ABABAB';
//   const iconSx = { color: iconColor, mr: 1, ...(error ? {} : { "&:hover": { color: "#fff" } }) };

//   return (
//     <Box>
//       {showStrength && strength && (
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//           <Typography sx={{ fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}>
//             {label}
//           </Typography>
//           <Typography sx={{
//             fontSize: { xs: '14px', lg: '16px' },
//             color: strength === 'Very Weak' ? '#F66066' : strength === 'Weak' ? '#FF6600' : '#6EC207',
//             fontWeight: 'bold',
//           }}>
//             {strength}
//           </Typography>
//         </Box>
//       )}
//       {!showStrength && (
//         <Typography sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}>
//           {label}
//         </Typography>
//       )}
      
//       <TextField
//         fullWidth
//         placeholder={placeholder}
//         type={showPassword ? "text" : "password"}
//         variant="outlined"
//         value={value}
//         onChange={onChange}
//         error={error}
//         helperText={error ? helperText : ""}
//         InputProps={{
//           sx: {
//             bgcolor: "#242C39",
//             borderRadius: "8px",
//             color: "#fff",
//             fontSize: { xs: '12px', lg: '14px' },
//             p: "2px",
//             "& input::placeholder": { color: "#fff", opacity: 1, fontSize: { xs: '12px', lg: '14px' } },
//           },
//           endAdornment: (
//             <InputAdornment position="end">
//               <IconButton onClick={togglePassword} sx={iconSx}>
//                 {showPassword ? <VisibilityOffOutlinedIcon /> : <RemoveRedEyeOutlinedIcon />}
//               </IconButton>
//             </InputAdornment>
//           ),
//         }}
//         sx={{
//           "& .MuiOutlinedInput-root": {
//             "& fieldset": { border: error ? "2px solid red" : "none" },
//             "&.Mui-focused fieldset": { borderColor: error ? '#F66066' : 'none' },
//           },
//           "& .MuiFormHelperText-root.Mui-error": { color: '#F66066', fontSize: { xs: "12px", lg: "14px" }, ml: '-1px' },
//         }}
//       />
//     </Box>
//   );
// };




// components/PasswordInput.tsx – فیکس تازه!
import { Box, TextField, Typography, InputAdornment, IconButton } from '@mui/material';
import { useState } from 'react';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

interface PasswordInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  strength?: string;
  showStrength?: boolean;
  showToggle?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label = "Password :",
  placeholder = "Please Enter Your Password",
  value,
  onChange,
  error = false,
  helperText = "The Password Is Incorrect",
  strength,
  showStrength = false,
  showToggle = true, 
  showPassword: externalShowPassword,
  onTogglePassword: externalOnToggle,
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

  // endAdornment فقط اگه showToggle true باشه!
  const endAdornment = showToggle ? (
    <InputAdornment position="end">
      <IconButton onClick={togglePassword} sx={iconSx}>
        {currentShowPassword ? <VisibilityOffOutlinedIcon /> : <RemoveRedEyeOutlinedIcon />}
      </IconButton>
    </InputAdornment>
  ) : null;

  return (
    <Box>
      {showStrength && strength ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}>
            {label}
          </Typography>
          <Typography sx={{ fontSize: { xs: '14px', lg: '16px' }, color: strength === 'Very Weak' ? '#F66066' : strength === 'Weak' ? '#FF6600' : '#6EC207', fontWeight: 'bold' }}>
            {strength}
          </Typography>
        </Box>
      ) : (
        <Typography sx={{ mb: 2, fontSize: { xs: '14px', lg: '16px' }, color: "#ABABAB", fontWeight: "bold" }}>
          {label}
        </Typography>
      )}
      
      <TextField
        fullWidth
        placeholder={placeholder}
        type={showToggle ? (currentShowPassword ? "text" : "password") : "password"} // اگه toggle نباشه، همیشه password
        variant="outlined"
        value={value}
        onChange={onChange}
        error={error}
        helperText={error ? helperText : ""}
        InputProps={{
          sx: {
            bgcolor: "#242C39",
            borderRadius: "8px",
            color: "#fff",
            fontSize: { xs: '12px', lg: '14px' },
            p: "2px",
            "& input::placeholder": { color: "#fff", opacity: 1, fontSize: { xs: '12px', lg: '14px' } },
          },
          endAdornment, // فقط اگه showToggle true باشه!
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { border: error ? "2px solid red" : "none" },
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