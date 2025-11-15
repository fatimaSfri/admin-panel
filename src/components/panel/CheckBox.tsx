// src/components/AgreeCheckbox.tsx
import { styled } from '@mui/material/styles';
import Checkbox, {type CheckboxProps } from '@mui/material/Checkbox';
import { FormControlLabel, Typography } from '@mui/material';

// مربع معمولی
const BpIcon = styled('span')({
  borderRadius: 6,
  width: 32,
  height: 32,
  backgroundColor: '#242C39',
});

// مربع انتخاب شده
const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#60A7F8',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  border: 'none',
  '&::before': {
    display: 'block',
    width: 32,
    height: 32,
    backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E")`,
    content: '""'
  },
});

// کامپوننت چک‌باکس با تایپ دقیق
const CustomCheckbox = (props: CheckboxProps) => (
  <Checkbox
    disableRipple
    icon={<BpIcon />}
    checkedIcon={<BpCheckedIcon />}
    sx={{ p: 0, '&:hover': { bgcolor: 'transparent' }, }}
    {...props}
  />
);

// پراپس با تایپ دقیق
interface AgreeCheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AgreeCheckbox = ({ checked, onChange }: AgreeCheckboxProps) => {
  return (
    <FormControlLabel
      control={<CustomCheckbox checked={checked} onChange={onChange} />}
      label={
        <Typography
          sx={{
            fontFamily: 'Niramit',
            fontSize: '16px',
            fontWeight: 300,
            color: '#ffffff',
            lineHeight: '100%',
            letterSpacing: '3%',
            ml: 1,
          }}
        >
          I Agree With The{' '}
          <span style={{ color: '#60A7F8',fontFamily:"NiramitBold",lineHeight: '100%',
          letterSpacing: '3%', }}>AML Policy</span> And{' '}
          <span style={{ color: '#60A7F8',fontFamily:"NiramitBold",
            lineHeight: '100%',
           letterSpacing: '3%',
           }}>User Agreement</span>.
        </Typography>
      }
      sx={{
        alignItems: 'center',
        m: 0,
        '& .MuiFormControlLabel-label': { ml: 1 },
      }}
    />
  );
};

export default AgreeCheckbox;