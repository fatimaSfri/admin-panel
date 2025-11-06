import { useState } from "react";
import { PasswordInput } from "./PasswordInput";
import { CustomButton } from "./CustomButton";
import CustomTitle from "./CustomTitle";
import Parent from "./Parent";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { resetPasswordSchema , type ResetPasswordData } from "../schemas/resetPassword";
import { resetPassword } from "../store/UserSlice";
import { useNavigate } from "react-router-dom";
import { useInfoDispatch } from "../store/hooks";


const ChangePassword = () => {
 const dispatch = useInfoDispatch();
  const navigate = useNavigate();

  const [strength, setStrength] = useState("");
  const [showPasswordStrength, setShowPasswordStrength] = useState(false);

  const formik = useFormik<ResetPasswordData>({
    initialValues: { password: "", confirmPassword: "" },
    validationSchema: toFormikValidationSchema(resetPasswordSchema),
    onSubmit: (values) => {
      dispatch(resetPassword({ password: values.password }));
      alert("Password changed successfully!");
      setTimeout(() => navigate("/auth/login"), 2000);
    },
  });


  const calculateStrength = (pass: string) => {
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
      {/* custom title */}
      <CustomTitle text="Change Password" mb={4} />

      {/* input for password */}
      <PasswordInput
        label="New Password :"
        name="password"
       value={formik.values.password}
        onChange={handlePasswordChange}
        showStrength={true}
        strength={strength}
        showPassword={showPasswordStrength}
        onTogglePassword={() => setShowPasswordStrength((prev) => !prev)}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password ? formik.errors.password : ""}
        showToggle={false}
      />

      {/* input for repeat password */}
      <PasswordInput
        label="Confirm Password :"
        name="confirmPassword"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
        helperText={formik.touched.confirmPassword ? formik.errors.confirmPassword : ""}
        showToggle={false} 
      />

      {/* button */}
      <CustomButton label="Confirm" mt={3.5} mb={2} onClick={formik.handleSubmit} />
    </Parent>
    
  );
};

export default ChangePassword;
