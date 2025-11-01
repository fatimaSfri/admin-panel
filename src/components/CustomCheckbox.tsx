// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Checkbox, {type CheckboxProps } from '@mui/material/Checkbox';
// import { FormControlLabel } from '@mui/material';

// const BpIcon = styled('span')(({ theme }) => ({
//   borderRadius: 3,
//   width: 16,
//   height: 16,
//   border:'2px gray solid',
//   '.Mui-focusVisible &': {
//     outline: '2px auto rgba(19,124,189,.6)',
//     outlineOffset: 2,
//   },
//   'input:hover ~ &': {
   
//     ...theme.applyStyles('dark', {
//       backgroundColor: '#30404d',
//     }),
//   },
//   'input:disabled ~ &': {
//     boxShadow: 'none',
  
//     ...theme.applyStyles('dark', {
//       background: 'rgba(57,75,89,.5)',
//     }),
//   },
//   ...theme.applyStyles('dark', {
//     boxShadow: '0 0 0 1px rgb(16 22 26 / 40%)',
//     backgroundColor: '',
//     backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))',
//   }),
// }));

// const BpCheckedIcon = styled(BpIcon)({
//   backgroundColor: '#36E0B8', 
//   backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
//   '&::before': {
//     display: 'block',
//     width: 16,
//     height: 16,
//     backgroundImage:
//       "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
//       " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
//       "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
//     content: '""', 
//   },
//   'input:hover ~ &': {
//     backgroundColor: '#2DC9A0',
//   },
// });

// // کامپوننت سفارشی Checkbox
// function CustomCheckbox(props: CheckboxProps) {
//   return (
//     <Checkbox
//       sx={{ '&:hover': { bgcolor: 'transparent' } }}
//       disableRipple
//       color="default"
//       checkedIcon={<BpCheckedIcon />}
//       icon={<BpIcon />}
//       inputProps={{ 'aria-label': 'checkbox' }}
//       {...props}
//     />
//   );
// }

// // استفاده – FormControlLabel با چک‌باکس سفارشی!
// export default function CustomizedCheckbox() {
//   return (
//     <FormControlLabel
//       control={<CustomCheckbox defaultChecked />}
//       label="مرا به خاطر بسپار"
//       sx={{ color: "grey.600" }}
//     />
//   );
// }



import { styled } from '@mui/material/styles';
import Checkbox, { type CheckboxProps } from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 20,
  height: 20,
  border: '1px gray solid',
  'input:hover ~ &': {
    ...theme.applyStyles('dark', {  // them -> theme!
      backgroundColor: '#30404d',
    }),
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    ...theme.applyStyles('dark', {  // them -> theme!
      background: 'rgba(57,75,89,.5)',
    }),
  },
  ...theme.applyStyles('dark', {  // them -> theme!
    boxShadow: '0 0 0 1px rgb(16 22 26 / 40%)',
    backgroundColor: '',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))',
  }),
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#36E0B8',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&::before': {
    display: 'block',
    width: 20,
    height: 20,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#2DC9A0',
  },
});


function CustomCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{ '&:hover': { bgcolor: 'transparent' } , mb:"4px" ,p:"8px" }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'checkbox' }}
      {...props}
    />
  );
}


export default function CustomizedCheckbox() {
  return (
    <FormControlLabel
      control={<CustomCheckbox />}
      label="Keep Me Login "
      sx={{ color: "#ABABAB",
      '& .MuiFormControlLabel-label': {
      fontWeight: 'bold',
      fontSize:{xs:'12px' , sm:'14px' , lg:'16px'}
    }, }}
    />
  );
}