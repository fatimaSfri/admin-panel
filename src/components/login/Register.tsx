import React, { useState } from "react";
import { Box } from "@mui/material";
import { useInfoDispatch } from "../../store/hooks";
import { type UserInfo, addUser } from "../../store/UserSlice";
import CustomInput from "../Use-everywhere/CustomInput";
import { PasswordInput } from "./PasswordInput";
import { CustomButton } from "../Use-everywhere/CustomButton";
import CustomQuestion from "./CustomQuestion";
import CustomTitle from "./CustomTitle";
import Parent from "../Use-everywhere/ParentBox";
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { registerSchema, type RegisterData } from '../../schemas/register';
import { useNavigate } from "react-router-dom";
import ParentForAll from "../Use-everywhere/ParentForAll";

const RegisterUI: React.FC = () => {
  const dispatch = useInfoDispatch();
  const navigate = useNavigate();
  const [strength, setStrength] = useState<string>("");
  const [showPasswordStrength, setShowPasswordStrength] = useState(false);

  const formik = useFormik<RegisterData>({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: toFormikValidationSchema(registerSchema),
    validateOnChange: false, 
    validateOnBlur: true,  
    onSubmit: (values) => {
      const newUser: UserInfo = {
        userName: values.name,
        email: values.email,
        password: values.password,
      };

      dispatch(addUser(newUser));

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
    <ParentForAll>
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
          onBlur={formik.handleBlur}
        />

        <CustomInput
          lable="Email :"
          placeholder="Please Enter Your Email"
          value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email ? formik.errors.email : ""}
          onBlur={formik.handleBlur}
        />

        <PasswordInput
          label="Password :"
          name="password"
          value={formik.values.password}
          onChange={handlePasswordChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password ? "Your password is too weak" : ""}
          showStrength={true}
          strength={strength}
          showPassword={showPasswordStrength}
          onTogglePassword={() => setShowPasswordStrength((prev) => !prev)}
          onBlur={formik.handleBlur}
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
    </ParentForAll>
  );
};

export default RegisterUI;
