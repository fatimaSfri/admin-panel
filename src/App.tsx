import { Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/Theme";
import Header from "./components/Header";
import LoginUI from "./components/Login";
import { Provider } from "react-redux";
import { store, persistor } from "./store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterUI from "./components/Register";
import CopyrightFooter from "./components/Footer";
import ForgetPassword from "./components/ForgetPassword";
import ChangePassword from "./components/ChangePassword"
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Stack
              direction="column"
              sx={{ bgcolor: "primary.main", minHeight:'100vh' }}
            >
              <Header></Header>
              <Routes>
                  <Route path="/" element={<RegisterUI />} />
                <Route path="/auth/login" element={<LoginUI />} />
                <Route path="/auth/register" element={<RegisterUI />} />
                <Route path="/auth/forgetPassword" >
                   <Route index element={<ForgetPassword/>}/>
                   <Route  path="ChangePass" element={<ChangePassword/>}/>
                </Route>
                <Route path="/auth/home" element={<Welcome />} />
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
