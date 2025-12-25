import { Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/Theme";
import Header from "./components/header/Header";
import LoginUI from "./components/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import AboutUs from "./components/panel/landing/AboutUs";
import FAQ from "./components/panel/landing/FAQ";
import { useInfoSelector } from "./store/hooks";

const App = () => {
  const currentUser = useInfoSelector((state) => state.user.items.length > 0);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Stack
          direction="column"
          sx={{ bgcolor: "primary.main", minHeight: "100vh" }}
        >
          <Header></Header>
          <Routes>
            <Route path="/" index element={<Home />}/>
            <Route path="home" element={<Home />}>
              <Route path="step/:step">
                <Route path="paymentSuccess" element={<UsdtPaymentSuccess />} />
                <Route path="paymentFiled" element={<PaymentFiled />} />
                <Route path="pmPayment" element={<PMPaymentSuccesse />} />
                <Route path="waiting" element={<WaitingPayment />} />
              </Route>
            </Route>

            <Route path="about" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="faq" element={<FAQ />} />
          </Routes>

          <Routes>
            <Route
              path="/dashboard"
              element={
                currentUser ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/auth/login" replace />
                )
              }
            >
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
    </Router>
  );
};

export default App;
