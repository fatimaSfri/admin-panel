import { Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomCategoryTag = styled(Button)(() => ({
  textTransform: 'none', 
  borderRadius: '8px',          
  borderColor: '#596B89',
  color:"#596B89", 
  borderWidth: '1px', 
  height:"57px",
  maxWidth:"174px",
  width:"174px"
}));


const categories = [
  "Verify Account", 
  "Change Email", 
  "Forget Password", 
  "Payment Problems", 
  "How To Trade"
];

const ButtonTag = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        gap: "20px",
        flexWrap:{xs:"wrap" , md:"nowrap"},
        justifyContent:"center"
      }}
    >
      {categories.map((label) => (
        <CustomCategoryTag
          key={label}
          variant="outlined" 
          onClick={() => console.log(`Clicked on: ${label}`)}
        >
          {`# ${label}`}
        </CustomCategoryTag>
      ))}
    </Box>
  );
};

export default ButtonTag;