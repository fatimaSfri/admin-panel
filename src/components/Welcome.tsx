
import { Box } from "@mui/material"
import CustomTitle from "./CustomTitle"

const Welcome = () => {
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
          <CustomTitle text='Welcome'></CustomTitle>
    </Box>
  )
}

export default Welcome