import { Box, Typography } from "@mui/material";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { loginSchema, type LoginData } from "../../schemas/login";
import CustomizedCheckbox from "./CustomCheckbox";
import CustomInput from "../Use-everywhere/CustomInput";
import { PasswordInput } from "./PasswordInput";
import { CustomButton } from "../Use-everywhere/CustomButton";
import CustomQuestion from "./CustomQuestion";
import CustomTitle from "./CustomTitle";
import Parent from "../Use-everywhere/ParentBox";
import { useEffect, useState } from "react";
import { useInfoDispatch, useInfoSelector } from "../../store/hooks";
import { loginUser } from "../../store/UserSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ParentForAll from "../Use-everywhere/ParentForAll";

const LoginUI = () => {
  const dispatch = useInfoDispatch();
  const { currentUser, errors } = useInfoSelector(
    (state) => state.user
  );
  const navigate = useNavigate();

  const formik = useFormik<LoginData>({
    initialValues: { email: "", password: "", rememberMe: false },
    validationSchema: toFormikValidationSchema(loginSchema),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
  useEffect(() => {
    if (currentUser && Object.keys(errors).length === 0) {
      navigate("/auth/home");
    }
  }, [currentUser, errors, navigate]);


  const [showPassword, setShowPassword] = useState(false);

  return (
    <ParentForAll>
    <Parent>
      {/* title */}
      <CustomTitle text="login" />

      {/* Email input  */}
      <CustomInput
        value={formik.values.email}
        name="email"
        onChange={formik.handleChange}
        error={Boolean(
          formik.touched.email && (formik.errors.email || errors.email)
        )}
        helperText={
          formik.touched.email ? formik.errors.email || errors.email : ""
        }
        onBlur={formik.handleBlur}
      />

      <PasswordInput
        label="Password :"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={Boolean(
          formik.touched.password && (formik.errors.password || errors.password)
        )}
        helperText={
          formik.touched.password
            ? formik.errors.password || errors.password
            : ""
        }
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword(!showPassword)}
        onBlur={formik.handleBlur}
        showToggle={true} 
      />

      {/* checkbox */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <CustomizedCheckbox
          name="rememberMe"
          checked={formik.values.rememberMe}
          onChange={formik.handleChange}
        />
        <Link to="/auth/forgetPassword">
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "12px", sm: "14px", lg: "16px" },
              color: "#1D8D94",
              cursor: "pointer",
              fontFamily:"NiramitBold",
              textDecoration: "underline",
              textUnderlineOffset: "1px",
            }}
          >
            Forgot Your Password ?
          </Typography>
        </Link>
      </Box>

      {/* Button  */}
      <CustomButton label="Login" onClick={formik.handleSubmit} />

      {/* custom text */}
      <CustomQuestion
        question="dont have an account?"
        answer="register"
        src="/auth/register"
      />
    </Parent>
    </ParentForAll>
  );
};

export default LoginUI;
