import { Box, CardContent, Paper ,Card, TextField, Button, FormControlLabel, Checkbox, Typography, Link, } from "@mui/material"

const Loginui = () => {

return (
<Box sx={{border:"4px red solid" ,width:'100', height:'75%' , mt:14, 
display:'flex' , justifyContent:'center',
alignItems:'center'}} >
<Card 
   sx={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.03)', 
      backdropFilter: 'blur(10px)', 
      WebkitBackdropFilter: 'blur(10px)',
      borderRadius: 2,
      width: '40%',
      height: '80%',
      boxShadow: '0 4px 20px rgba(42, 51, 66, 0.3)', 
      p: 2,
     
    }}
  >
<Box
      component="form" 
      sx={{
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2, 
        maxWidth: 400, 
        mx: 'auto', 
        p: 3, 
      }}
      autoComplete="off" 
    >
     
      <TextField
        label="ایمیل"
        type="email"
        sx={{bgcolor:"white"}}
      />
       <TextField
        label="پسورد" 
        type="password"
        sx={{bgcolor:"white"}}
      />
      
     
    <Box
      sx={{
        display: 'flex', // flex برای چیدمان افقی.
        alignItems: 'center', // عمودی وسط‌چین.
        justifyContent: 'space-between', // چک‌باکس چپ، لینک راست – پخش فاصله!
        width: '100%', // عرض کامل Box.
        p: 1, // padding ریز دور Box.
        backgroundColor: 'grey.100', // زمینه ملایم برای تست – اختیاری!
        borderRadius: 1, // گوشه‌های گرد.
      }}
    >
      {/* چک‌باکس با label – ساده و شیک! */}
      <FormControlLabel
        control={
          <Checkbox 
            defaultChecked // پیش‌فرض تیک‌خورده – اختیاری!
            sx={{ color: 'grey.500', '&.Mui-checked': { color: 'primary.main' } }} // رنگ تیره/آبی.
          />
        }
        label="مرا به خاطر بسپار" // متن کنار چک‌باکس.
        sx={{ color: 'grey.600' }} // رنگ label خاکستری.
      />

      {/* نوشته لینکی – clickable! */}
      <Typography
        variant="body2" // اندازه کوچک.
        color="primary" // رنگ آبی MUI – لینک‌مانند!
        sx={{
          cursor: 'pointer', // موس روش hover بشه، دستک تغییر کنه.
          textDecoration: 'underline', // خط زیرین برای حس لینک.
          '&:hover': { textDecoration: 'underline wavy' }, // hover موج‌دار – فان!
        }}
      >
        فراموشی رمز عبور
      </Typography>
    </Box>
     <Button
        type="submit" 
        variant="contained"
        color="primary"
        sx={{ mt: 1 }}
      >
        ارسال
      </Button>
    </Box>
    <Typography 
      variant="body2" 
      sx={{ 
        textAlign: 'center', // وسط‌چین.
        mt: 2, // margin-top ۲ واحد، پایین فرم.
        color: 'grey.500', // رنگ خاکستری برای متن اصلی.
      }}
    >
      حساب نداری؟{' '}
      <Link 
        href="/register" // لینک به صفحه ریجستر – عوض کن به روت React Router!
        underline="hover" // خط زیرین فقط hover – شیک!
        color="primary" // رنگ آبی MUI – لینک‌مانند!
        sx={{ 
          cursor: 'pointer', // موس دستک بشه.
          fontWeight: 'bold', // bold برای برجسته شدن.
        }}
      >
        ثبت‌نام کن
      </Link>
    </Typography>
  </Card>
</Box>
)
}

export default Loginui
