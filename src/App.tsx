import { Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/Theme";
import Header from "./components/header/Header";
import LoginUI from "./components/login/Login";
import { Provider } from "react-redux";
import { store, persistor } from "./store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterUI from "./components/login/Register";
import CopyrightFooter from "./components/Use-everywhere/Footer";
import ForgetPassword from "./components/login/ForgetPassword";
import ChangePassword from "./components/login/ChangePassword";
import Welcome from "./components/Welcome";
import Home from "./components/panel/Home";
import UsdtPaymentSuccess from "./components/panel/payment/UsdtPaymentSuccess";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Stack
              direction="column"
              sx={{ bgcolor: "primary.main", minHeight: "100vh" }}
            >
              <Header></Header>
              {/* <Routes>
                <Route path="/home/step/:step" element={<Home />} />
                <Route path="home" element={<Home />} /> 
                <Route path="/home/st/payment" element={<UsdtPaymentSuccess/>} />
              </Routes> */}

              <Routes>
                <Route path="/home" element={<Home />}>
                  <Route path="step/:step">
                    {/* داخل stepها */}
                    <Route path="payment" element={<UsdtPaymentSuccess />} />
                    {/* اگه بخوای stepهای دیگه هم داشته باشی */}
                    {/* <Route index element={<StepContent />} /> */}
                  </Route>
                </Route>
                {/* یا اگه home بدون step هم داری */}
                <Route path="/home" element={<Home />} /> {/* این بیرون باشه */}
              </Routes>
              
              <Routes>
                <Route path="/" element={<RegisterUI />} />
                <Route path="auth/login" element={<LoginUI />} />
                <Route path="auth/register" element={<RegisterUI />} />
                <Route path="auth/forgetPassword">
                  <Route index element={<ForgetPassword />} />
                  <Route path="ChangePass" element={<ChangePassword />} />
                </Route>
                <Route path="auth/home" element={<Welcome />} />
              </Routes>
              <CopyrightFooter></CopyrightFooter>
            </Stack>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </Router>
  );
};

export default App;
