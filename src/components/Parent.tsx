import { Box, Card } from "@mui/material"

interface WrapperProps {
  children: React.ReactNode; 
}

const Parent:React.FC<WrapperProps> = ({
    children,
}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        mt: 14,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight:"100vh",
      }}
    >
      <Card
        elevation={0}
        sx={{
          width: "100%",
          maxWidth:"560px",
          backgroundColor: "rgba(250, 250, 250, 0.025)",
          backdropFilter: "blur(20px)",
          borderRadius: 10,
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
            px: 6,
          }}
        >
          {children}
         </Box>
      </Card>
    </Box>
  )
}

export default Parent;