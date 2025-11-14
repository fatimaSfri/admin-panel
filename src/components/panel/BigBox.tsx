import { Card } from "@mui/material"

interface WrapperProps {
  children: React.ReactNode; 
}

const BigBox:React.FC<WrapperProps> = ({
    children,
}) => {
  return (
      <Card
        elevation={0}
        sx={{
          width: "100%",
          maxWidth:"1140px",
          backgroundColor: "rgba(250, 250, 250, 0.025)",
          backdropFilter: "blur(20px)",
          borderRadius: "30px",
          mx: "auto",
         padding: "29px 80px 39px 77px",
         boxSizing: "border-box",
         display:"flex",
         flexDirection:"column",   
         gap:"43px"
        }}
      >
          {children}
      </Card>
    
  )
}

export default BigBox;