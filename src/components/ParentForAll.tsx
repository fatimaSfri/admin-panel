import { Box } from '@mui/material'

interface WrapperProps {
  children: React.ReactNode; 
  gap?:string
}

const ParentForAll:React.FC<WrapperProps> = ({children ,gap}) => {

  return (
   <Box
      sx={{
        flexGrow: 1,
        mt: 14,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight:"100vh",
        border:"2px solid red",
       gap 
       }}
    >
     {children}
    </Box>
  )
}

export default ParentForAll