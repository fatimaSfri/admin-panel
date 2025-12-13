import { Box, Card } from "@mui/material"

interface WrapperProps {
  children: React.ReactNode; 
  pb?: number | string
  pt?: number | string
  pr?: number | string
  pl?: number | string
  mb?: number | string
}

const Parent:React.FC<WrapperProps> = ({
    children,
    pb=5,
    pt=5,
    pr=4.5,
    pl=4.5,
    mb=0
}) => {
  return (
      <Card
        elevation={0}
        sx={{
          width: {xs:"90%" , sm:"100%"},
          maxWidth:"560px",
          backgroundColor: "rgba(250, 250, 250, 0.025)",
          backdropFilter: "blur(20px)",
          borderRadius: "30px",
          mx: "auto",
          pb,
          pt,
          mb
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            pr,
            pl,
            mx:"auto"
          }}
        >
          {children}
         </Box>
      </Card>
    
  )
}

export default Parent;