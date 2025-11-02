import { useState } from "react";
import { PasswordInput } from "./PasswordInput";
import { CustomButton } from "./CustomButton";
import CustomTitle from "./CustomTitle";
import Parent from "./Parent";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [showPasswordStrength, setShowPasswordStrength] = useState(false);
  const [errorPas] = useState(false);
  const calculateStrength = (pass: string) => {
    if (pass.length < 6) return "Very Weak";
    if (pass.length < 11) return "Weak";
    return "Strong!";
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setStrength(calculateStrength(value));
  };

  return (
    <Parent>
      {/* custom title */}
      <CustomTitle text="Change Password" mb={4} />

      {/* input for password */}
      <PasswordInput
        label="New Password :"
        value={password}
        onChange={handlePasswordChange}
        showStrength={true}
        strength={strength}
        showPassword={showPasswordStrength}
        onTogglePassword={() => setShowPasswordStrength((prev) => !prev)}
        showToggle={false}
      />

      {/* input for repeat password */}
      <PasswordInput
        label="Confirm Password :"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={errorPas}
        helperText="The Password Is Incorrect"
        showToggle={false} // جادو: icon غیبش زد!
      />

      {/* button */}
      <CustomButton label="Confirm" mt={3.5} mb={2} />
    </Parent>
    
  );
};

export default ChangePassword;
