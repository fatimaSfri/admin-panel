import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useInfoDispatch } from "../store/hooks";
import { type UserInfo, addUser } from "../store/UserSlice";
import EmailInput from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { CustomButton } from "./CustomButton";
import CustomQuestion from "./CustomQuestion";
import CustomTitle from "./CustomTitle";
import Parent from "./Parent";

const RegisterUI = () => {
  const dispatch = useInfoDispatch();

  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [strength, setStrength] = useState("");
  const [showPasswordStrength, setShowPasswordStrength] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser: UserInfo = {
      userName: userName,
      email: email,
      password: password,
    };

    setTimeout(() => {
      console.log(
        "localStorage after delay:",
        localStorage.getItem("persist:root")
      );
    }, 1000);
    dispatch(addUser(newUser));
    console.log("کاربر اضافه شد:", newUser);

    setUserName("");
    setEmail("");
    setPassword("");

    alert("ثبت‌نام موفق!");
  };

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
      <CustomTitle text="Register" />

      <Box onSubmit={handleSubmit}>
        <Box>
          <Typography
            sx={{
              mb: 2,
              fontSize: { xs: "14px", lg: "16px" },
              color: "#ABABAB",
              fontWeight: "bold",
            }}
          >
            Name :
          </Typography>
          <TextField
            fullWidth
            placeholder="Please Enter Your Name"
            variant="outlined"
            InputProps={{
              sx: {
                bgcolor: "#242C39",
                borderRadius: "8px",
                color: "#fff",
                "& input::placeholder": {
                  color: "#fff",
                  opacity: 1,
                  fontSize: { xs: "12px", lg: "14px" },
                },
                fontSize: { xs: "12px", lg: "14px" },
                p: "2px",
              },
            }}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: "none" },
              },
            }}
          />
        </Box>
        {/* email input */}
        <EmailInput />

        {/* input for password  */}
        <PasswordInput
          label="Password :"
          value={password}
          onChange={handlePasswordChange}
          showStrength={true}
          strength={strength}
          showPassword={showPasswordStrength}
          onTogglePassword={() => setShowPasswordStrength((prev) => !prev)}
        />
      </Box>

      {/* button */}
      <CustomButton label="Register" />

      {/* custom text */}
      <CustomQuestion
        question="Have An Account?"
        answer="Login"
        src="/auth/login"
      />
    </Parent>
  );
};

export default RegisterUI;
