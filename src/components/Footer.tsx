import { Box, Typography } from '@mui/material'; 

function CopyrightFooter() {
  return (
    <Box
    maxWidth='lg'
      sx={{
       width:'86%',
       mx:"auto"
        }}
    >
      {/* <Container  sx={{ width: '100%' }}>  */}
        <Box
          sx={{
            borderTop: '1px solid #2E3E59', 
          p: 2, 
            textAlign: 'center', 
            borderRadius: '0 0 8px 8px', 
          }}
        >
          <Typography
            variant="body2"
            color="#ABABAB"
            sx={{ 
               fontSize:{xs:'10px' , lg:'12px'},
              fontWeight: '400', 
            }}
          >
           Copyright © 2024 Repayment. All Rights Reserved
          </Typography>
        </Box>
      {/* </Container> */}
    </Box>
  );
}

export default CopyrightFooter; 