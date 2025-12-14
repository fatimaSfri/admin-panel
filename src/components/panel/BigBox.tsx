import { Card } from "@mui/material"

interface WrapperProps {
  children: React.ReactNode; 
  padding?:string
  mb?:string
}

const BigBox:React.FC<WrapperProps> = ({
    children,
    padding="29px 80px 43px 77px",
    mb="95px"
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
         padding: {xs:"30px 30px 40px 30px", md:padding},
         boxSizing: "border-box",
         display:"flex",
         flexDirection:"column",   
         gap:"43px",
         mb,
         overflow:"visible",
        }}
      >
          {children}
      </Card>
    
  )
}

export default BigBox;