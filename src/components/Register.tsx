// import React, { useState } from "react";
// import { Box } from "@mui/material";
// import { useInfoDispatch } from "../store/hooks";
// import { type UserInfo, addUser } from "../store/UserSlice";
// import CustomInput from "./CustomInput";
// import { PasswordInput } from "./PasswordInput";
// import { CustomButton } from "./CustomButton";
// import CustomQuestion from "./CustomQuestion";
// import CustomTitle from "./CustomTitle";
// import Parent from "./Parent";
// import { useFormik } from 'formik';
// import { toFormikValidationSchema } from 'zod-formik-adapter';
// import { registerSchema,type RegisterData } from '../schemas/register';

// const RegisterUI = () => {
//   const dispatch = useInfoDispatch();

//   // const [userName, setUserName] = useState<string>("");
//   // const [email, setEmail] = useState<string>("");
//   // const [password, setPassword] = useState<string>("");
//   const [strength] = useState("");
//   const [showPasswordStrength, setShowPasswordStrength] = useState(false);
//   const formik = useFormik<RegisterData>({
//     initialValues: {name:'', email: '', password: '' },
//     validationSchema: toFormikValidationSchema(registerSchema),
//     onSubmit: (values) => {
//       console.log('ثبت شد:', values); 
//     },
//    });
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // const newUser: UserInfo = {
//     //   userName: userName,
//     //   email: email,
//     //   password: password,
//     // };
   
//   //   setTimeout(() => {
//   //     console.log(
//   //       "localStorage after delay:",
//   //       localStorage.getItem("persist:root")
//   //     );
//   //   }, 1000);
//   //   dispatch(addUser(newUser));
//   //   console.log("کاربر اضافه شد:", newUser);

//   //   setUserName("");
//   //   setEmail("");
//   //   setPassword("");

//   //   alert("ثبت‌نام موفق!");
//   // };

//   // const calculateStrength = (pass: string) => {
//   //   if (pass.length < 6) return "Very Weak";
//   //   if (pass.length < 11) return "Weak";
//   //   return "Strong!";
//   // };

//   // const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   const value = e.target.value;
//   //   setPassword(value);
//   //   setStrength(calculateStrength(value));
//   // };

//   return (
//     <Parent>
//       {/* custom title */}
//       <CustomTitle text="Register" />

//       <Box onSubmit={handleSubmit}>
//          <CustomInput
//                 lable="Name :"
//                 placeholder="Please Enter Your Name"
//                 value={formik.values.name}
//                 name="name"
//                 onChange={formik.handleChange}
//                 error={Boolean(formik.errors.name)}
//                 helperText={formik.errors.name}
//               />
//       {/* email input */}
//         {/* <EmailInput /> */}
//         <CustomInput
//                 value={formik.values.email}
//                 name="email"
//                 onChange={formik.handleChange}
//                 error={Boolean(formik.errors.email)}
//                 helperText={formik.errors.email}
//               />

//         {/* input for password  */}
//         <PasswordInput
//           label="Password :"
//           name="password"
//           value={formik.values.password} 
//           onChange={formik.handleChange}
//           error={formik.touched.password && Boolean(formik.errors.password)}
//           helperText={formik.touched.password && formik.errors.password ? "The Password Is Incorrect" : ""}
//           showStrength={true}
//           strength={strength}
//           showPassword={showPasswordStrength}
//           onTogglePassword={() => setShowPasswordStrength((prev) => !prev)}
//         />
//       </Box>

//       {/* button */}
//       <CustomButton label="Register" />

//       {/* custom text */}
//       <CustomQuestion
//         question="Have An Account?"
//         answer="Login"
//         src="/auth/login"
//       />
//     </Parent>
//   );
// };

// export default RegisterUI;



import React, { useState } from "react";
import { Box } from "@mui/material";
import { useInfoDispatch } from "../store/hooks";
import { type UserInfo, addUser } from "../store/UserSlice";
import CustomInput from "./CustomInput";
import { PasswordInput } from "./PasswordInput";
import { CustomButton } from "./CustomButton";
import CustomQuestion from "./CustomQuestion";
import CustomTitle from "./CustomTitle";
import Parent from "./Parent";
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { registerSchema, type RegisterData } from '../schemas/register';
import { useNavigate } from "react-router-dom";


const RegisterUI: React.FC = () => {
  const dispatch = useInfoDispatch();
  const navigate = useNavigate();
  const [strength, setStrength] = useState<string>("");
  const [showPasswordStrength, setShowPasswordStrength] = useState(false);

  const formik = useFormik<RegisterData>({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: toFormikValidationSchema(registerSchema),
    onSubmit: (values) => {
      const newUser: UserInfo = {
        userName: values.name,
        email: values.email,
        password: values.password,
      };

      dispatch(addUser(newUser));
      console.log("کاربر اضافه شد:", newUser);

      setStrength("");
      navigate("/auth/home");
    },
  });


  const calculateStrength = (pass: string) => {
    if (pass.length === 0) return "";
    if (pass.length < 6) return "Very Weak";
    if (pass.length < 11) return "Weak";
    return "Strong!";
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    const value = e.target.value;
    setStrength(calculateStrength(value));
  };

  return (
    <Parent>
      <CustomTitle text="Register" />

      <Box component="form" onSubmit={formik.handleSubmit} noValidate>
        <CustomInput
          lable="Name :"
          placeholder="Please Enter Your Name"
          value={formik.values.name}
          name="name"
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name ? formik.errors.name : ""}
        />

        <CustomInput
          lable="Email :"
          placeholder="Please Enter Your Email"
          value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email ? formik.errors.email : ""}
        />

        <PasswordInput
          label="Password :"
          name="password"
          value={formik.values.password}
          onChange={handlePasswordChange} // 👈 اینجا تغییر کرد
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password ? "The Password Is Incorrect" : ""}
          showStrength={true}
          strength={strength}
          showPassword={showPasswordStrength}
          onTogglePassword={() => setShowPasswordStrength((prev) => !prev)}
        />

        <CustomButton
          label="Register"
          type="submit"
          onClick={() => formik.handleSubmit()}
        />
      </Box>

      <CustomQuestion
        question="Have An Account?"
        answer="Login"
        src="/auth/login"
      />
    </Parent>
  );
};

export default RegisterUI;
