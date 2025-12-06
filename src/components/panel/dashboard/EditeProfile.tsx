import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useInfoDispatch } from "../../../store/hooks";
import { type UserInfo, addUser } from "../../../store/UserSlice";
import CustomInput from "../../Use-everywhere/CustomInput";
import { PasswordInput } from "../../login/PasswordInput";
import { CustomButton } from "../../Use-everywhere/CustomButton";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { registerSchema, type RegisterData } from "../../../schemas/register";
import { useNavigate } from "react-router-dom";

const EditeProfile = () => {
  const dispatch = useInfoDispatch();
  const navigate = useNavigate();
  const [strength, setStrength] = useState<string>("");
  const [showPasswordStrength, setShowPasswordStrength] = useState(false);

  const formik = useFormik<RegisterData>({
    initialValues: { name: "", email: "", password: "" },
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
      navigate("/dashboard");
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
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{ maxWidth: "485px", mx: "auto",height:"100%", display:"flex",
          flexDirection:"column",  
          justifyContent:"center",
        }}
    >

        <Typography
           sx={{
            fontFamily:"NiramitSemiBold",
            fontSize:"24px",
            lineHeight:"100%",
            letterSpacing:"0px",
            textTransform:"capitalize",
            color:"#FFFFFF",
            mb:"64px"
           }}
        >Edit profile</Typography>

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
        helperText={
          formik.touched.password && formik.errors.password
            ? "Your password is too weak"
            : ""
        }
        showStrength={true}
        strength={strength}
        showPassword={showPasswordStrength}
        onTogglePassword={() => setShowPasswordStrength((prev) => !prev)}
        onBlur={formik.handleBlur}
      />

      <CustomButton
        label="confirm"
        type="submit"
        onClick={() => formik.handleSubmit()}
        mt="31px"
      />
    </Box>
  );
};

export default EditeProfile;
