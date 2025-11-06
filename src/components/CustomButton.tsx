import { Button, type ButtonProps } from '@mui/material';

interface CustomButtonProps extends Omit<ButtonProps, 'sx' | 'children'> {
  label: string; 
  mt?: number; 
  mb?: number; 
  onClick?: () => void; 
}

export const CustomButton: React.FC<CustomButtonProps> = ({ 
  label, 
  mt = 2.5, 
  mb = 2.5, 
  onClick, 
  ...props 
}) => (
  <Button
    fullWidth
    onClick={onClick}
    sx={{
      fontFamily:"NiramitBold",
      height: 60,
      backgroundColor: "#1D8D94",
      boxShadow: "0px 0px 20px 0px #1D8D9480",
      color: "white",
      fontSize: "16px",
      borderRadius: 2,
      mb,
      mt,
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
    {...props}
  >
    {label}
  </Button>
);