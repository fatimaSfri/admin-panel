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
import Home from "./components/panel/Home";
import UsdtPaymentSuccess from "./components/panel/payment/UsdtPaymentSuccess";
import PaymentFiled from "./components/panel/payment/PaymentFiled";
import PMPaymentSuccesse from "./components/panel/payment/PMPaymentSuccesse";
import WaitingPayment from "./components/panel/payment/WaitingPayment";
import Dashboard from "./components/panel/dashboard/Dashboard";
import TableBox from "./components/panel/dashboard/TableBox";
import EditeProfile from "./components/panel/dashboard/EditeProfile";
import PartnerProgram from "./components/panel/dashboard/PartnerProgram";
import ContactUs from "./components/panel/landing/ContactUs";

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

              <Routes>
                <Route path="/" element={<Home />}>
                  <Route path="home/step/:step">
                    <Route
                      path="paymentSuccess"
                      element={<UsdtPaymentSuccess />}
                    />
                    <Route path="paymentFiled" element={<PaymentFiled />} />
                    <Route path="pmPayment" element={<PMPaymentSuccesse />} />
                    <Route path="waiting" element={<WaitingPayment />} />
                  </Route>
                </Route>

                <Route path="contact-us" element={<ContactUs />} />
              </Routes>

              <Routes>
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route index element={<TableBox />} />
                  <Route path="edite-profile" element={<EditeProfile />} />
                  <Route path="partner-program" element={<PartnerProgram />} />
                </Route>
              </Routes>
              <Routes>
                <Route path="auth/login" element={<LoginUI />} />
                <Route path="auth/register" element={<RegisterUI />} />
                <Route path="auth/forgetPassword">
                  <Route index element={<ForgetPassword />} />
                  <Route path="ChangePass" element={<ChangePassword />} />
                </Route>
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
