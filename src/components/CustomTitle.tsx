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
              fontFamily: "Niramit, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: { xs: "30px", lg: "36px" },
              lineHeight: "100%",
              letterSpacing: "0%",
              textTransform: "capitalize",
              background: "linear-gradient(60deg, #1D8D94 30%, #99D9A6 70%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              leadingTrim: "none",
              textAlign: "center",
              mb
            }}
          >
            {text}
            {/* login */}
          </Typography> 
  )
}

export default CustomTitle