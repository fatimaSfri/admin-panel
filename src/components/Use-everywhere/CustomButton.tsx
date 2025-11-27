import { Button, type ButtonProps } from '@mui/material';
import { Link, type To } from 'react-router-dom';
import {type OverridableStringUnion } from "@mui/types";
import {type ButtonPropsColorOverrides } from "@mui/material/Button";

type CustomButtonColor =
  | "primary"
 

interface CustomButtonProps extends Omit<ButtonProps, 'sx' | 'children'> {
  label: string; 
  mt?: string | number; 
  mb?: string | number; 
  onClick?: () => void; 
  color?: OverridableStringUnion<CustomButtonColor, ButtonPropsColorOverrides>;
  to?:To
}

export const CustomButton: React.FC<CustomButtonProps> = ({ 
  label, 
  mt = 2.5, 
  mb = 2, 
  onClick, 
  color="#1D8D94",
  to,
}) => (
  <Button
   component={to ? Link : 'button'}   
    to={to}  
    fullWidth
    onClick={onClick}
    sx={{
      width: {xs:"90%" , sm:"100%"},
      maxWidth:"560px",
      boxSizing:"border-box",
      fontFamily:"NiramitBold",
      height: 60,
      backgroundColor: color,
      boxShadow: "0px 0px 20px 0px #1D8D9480",
      color: "white",
      fontSize: "16px",
      borderRadius: 2,
      mb,
      mt,
      mx:"auto",
      textTransform: "none",
      transition: "all 0.3s ease-out",
      "&:hover": {
        transform: "scale(1.02)",
        boxShadow: "0px 0px 25px 0px #1D8D9480",
        backgroundColor: color,
      },
      "&:active": {
        transform: "scale(0.98)",
      },
    }}

  >
    {label}
  </Button>

);