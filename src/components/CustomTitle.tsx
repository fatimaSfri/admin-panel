import { Typography } from '@mui/material'

interface Title{
 text:string;
 mb?:number;
}


const CustomTitle:React.FC<Title> = ({
    text,
    mb
}) => {
  return (
     <Typography
            sx={{
              fontFamily: "NiramitBold",
              fontSize: { xs: "30px", lg: "36px" },
              textTransform: "capitalize",
              background:"linear-gradient(91.79deg, #1D8D94 2.58%, #91D2A3 126.11%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              leadingTrim: "none",
              textAlign: "center",
              mb
            }}
          >
            {text}
          </Typography> 
  )
}

export default CustomTitle