import { Box, Card } from "@mui/material"

interface WrapperProps {
  children: React.ReactNode; 
}

const Parent:React.FC<WrapperProps> = ({
    children,
}) => {
  return (
      <Card
        elevation={0}
        sx={{
          width: "100%",
          maxWidth:"560px",
          backgroundColor: "rgba(250, 250, 250, 0.025)",
          backdropFilter: "blur(20px)",
          borderRadius: "30px",
          mx: "auto",
          py: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            px: 4.5, 
            mx:"auto"
          }}
        >
          {children}
         </Box>
      </Card>
    
  )
}

export default Parent;