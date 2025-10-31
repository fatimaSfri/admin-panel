
import React, { useState } from "react";
import {
  Box,
  Card,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  Link,
} from "@mui/material";
import {  useInfoDispatch } from "../store/hooks";
import { type UserInfo, addUser } from "../store/UserSlice";

const RegisterUI = () => {
  // const Users = useInfoSelector((state) => state.user.items); // فعلاً کامنت کن برای تست
  const dispatch = useInfoDispatch();

  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userName || !email || !password) {
      alert("لطفاً همه فیلدها رو پر کن!");
      return;
    }

    const newUser: UserInfo = {
      userName: userName,
      email: email,
      password: password, // string فرض کن – slice رو هم string کن!
    };


    // چک localStorage
    setTimeout(() => {
      console.log(
        "localStorage after delay:",
        localStorage.getItem("persist:root")
      );
    }, 1000); // ۱ ثانیه صبر کن تا persist save کنه
    dispatch(addUser(newUser));
    console.log("کاربر اضافه شد:", newUser); // لاگ فقط اینجا – برای تست!

    setUserName("");
    setEmail("");
    setPassword("");

    alert("ثبت‌نام موفق!");

  };

  return (
    <Box
      sx={{
        border: "4px red solid",
        width: "100",
        height: "75%",
        mt: 14,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: 2,
          width: "40%",
          height: "80%",
          boxShadow: "0 4px 20px rgba(42, 51, 66, 0.3)",
          p: 2,
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 400,
            mx: "auto",
            p: 3,
          }}
          autoComplete="off"
        >
          <TextField
            label="نام کاربری"
            value={userName}
            onChange={(e) => setUserName(e.target.value)} // فقط setState – بدون لاگ/dispatch
            sx={{ bgcolor: "white" }}
          />

          <TextField
            label="ایمیل"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ bgcolor: "white" }}
          />

          <TextField
            label="پسورد"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ bgcolor: "white" }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              p: 1,
              backgroundColor: "grey.100",
              borderRadius: 1,
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: "grey.500",
                    "&.Mui-checked": { color: "primary.main" },
                  }}
                />
              }
              label="مرا به خاطر بسپار"
              sx={{ color: "grey.600" }}
            />
            <Typography
              variant="body2"
              color="primary"
              sx={{
                cursor: "pointer",
                textDecoration: "underline",
                "&:hover": { textDecoration: "underline wavy" },
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
            textAlign: "center",
            mt: 2,
            color: "grey.500",
          }}
        >
          حساب داری؟{" "}
          <Link
            href="/login"
            underline="hover"
            color="primary"
            sx={{
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            وارد شو
          </Link>
        </Typography>
      </Card>
    </Box>
  );
};

export default RegisterUI;
