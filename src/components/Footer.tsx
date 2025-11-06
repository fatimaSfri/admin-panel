import { Box, Typography } from '@mui/material'; 

function CopyrightFooter() {
  return (
    <Box
    maxWidth='lg'
      sx={{
       width:'86%',
       mx:"auto",
        }}
    >
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
            }}
          >
           Copyright © 2024 Repayment. All Rights Reserved
          </Typography>
        </Box>
    </Box>
  );
}

export default CopyrightFooter; 