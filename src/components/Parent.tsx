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
        py: 4,
      }}
    >
      <Card
        elevation={0}
        sx={{
          width: { xs: "80%", sm: "560px" },
          backgroundColor: "rgba(250, 250, 250, 0.025)",
          backdropFilter: "blur(20px)",
          borderRadius: 10,
          px: { xs: 2, lg: 6 },
          py: 8,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {children}
         </Box>
      </Card>
    </Box>
  )
}

export default Parent;