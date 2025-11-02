// import { Box, Typography, Link } from "@mui/material";
// import { useState } from "react";
// import CustomizedCheckbox from "./CustomCheckbox";
// import EmailInput from "./EmailInput";
// import { PasswordInput } from "./PasswordInput";
// import { CustomButton } from "./CustomButton";
// import CustomQuestion from "./CustomQuestion";
// import CustomTitle from "./CustomTitle";
// import Parent from "./Parent";
// import { useFormik } from 'formik';
// import { toFormikValidationSchema } from '@hookform/resolvers/zod'
// import { loginSchema } from '../validation/schema'; 

// const LoginUI = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errorPas] = useState(false);

//  const formik =useFormik({
//   initialValues:{email:''},
//   validationSchema: toFormikValidationSchema(loginSchema),
//   onSubmit:(values)=>{
//     console.log('ورود کردی:', values);
//   }
//  })

//   return (
//     <Parent>
//       {/* title */}
//       <CustomTitle text="login" />

//       {/* Email input */}
//       <EmailInput value={formik.values.email} name="email" change={formik.handleChange}/>

//       {/* input for password  */}
//       <PasswordInput
//         label="Password :"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//         error={errorPas}
//         helperText="The Password Is Incorrect"
//         showPassword={showPassword}
//         onTogglePassword={() => setShowPassword(!showPassword)}
//       />

//       {/* checkbox */}
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           width: "100%",
//         }}
//       >
//         <CustomizedCheckbox></CustomizedCheckbox>
//         <Link href="/auth/forgetPassword">
//           <Typography
//             variant="body2"
//             sx={{
//               fontSize: { xs: "12px", sm: "14px", lg: "16px" },
//               color: "#1D8D94",
//               cursor: "pointer",
//               fontWeight: "bold",
//               textDecoration: "underline",
//               textUnderlineOffset: "1px",
//             }}
//           >
//             Forgot Your Password ?
//           </Typography>
//         </Link>
//       </Box>

//       {/* Button */}
//       <CustomButton label="Login" />

//       {/* custom text */}
//       <CustomQuestion
//         question="dont have an account?"
//         answer="register"
//         src="/auth/register"
//       />
//     </Parent>
//   );
// };

// export default LoginUI;


import { Box, Typography, Link } from "@mui/material";
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { loginSchema,type LoginData } from '../schemas/login'; 
import CustomizedCheckbox from "./CustomCheckbox";
import CustomInput from "./CustomInput";
import { PasswordInput } from "./PasswordInput";
import { CustomButton } from "./CustomButton";
import CustomQuestion from "./CustomQuestion";
import CustomTitle from "./CustomTitle";
import Parent from "./Parent";
import { useState } from "react";

const LoginUI = () => {
  const formik = useFormik<LoginData>({ 
    initialValues: { email: '' , password:''}, 
    validationSchema: toFormikValidationSchema(loginSchema),
    onSubmit: (values) => { 
      console.log('ورود کردی:', values);
      
    },
  });

  // showPassword رو می‌تونی به formik اضافه کنی، اما فعلاً local نگه دار (یا به state formik ببر)
  const [showPassword, setShowPassword] = useState(false);
 
  return (
    <Parent>
      {/* title */}
      <CustomTitle text="login" />
      
      {/* Email input – error/helper از formik */}
      <CustomInput
        value={formik.values.email}
        name="email"
        onChange={formik.handleChange}
        error={Boolean(formik.errors.email)}
        helperText={formik.errors.email}
      />
      
      {/* Password input – به formik وصل! */}
      <PasswordInput
        label="Password :"
        name='name'
        value={formik.values.password} 
        onChange={formik.handleChange} 
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password ? "The Password Is Incorrect" : ""}
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword(!showPassword)}
      />
      
      {/* checkbox */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        <CustomizedCheckbox />
        <Link href="/auth/forgetPassword">
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "12px", sm: "14px", lg: "16px" },
              color: "#1D8D94",
              cursor: "pointer",
              fontWeight: "bold",
              textDecoration: "underline",
              textUnderlineOffset: "1px",
            }}
          >
            Forgot Your Password ?
          </Typography>
        </Link>
      </Box>
      
      {/* Button – onClick به handleSubmit وصل! */}
      <CustomButton label="Login" onClick={formik.handleSubmit} /> 
      
      {/* custom text */}
      <CustomQuestion question="dont have an account?" answer="register" src="/auth/register" />
    </Parent>
  );
};

export default LoginUI;