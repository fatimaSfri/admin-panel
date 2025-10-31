import { Stack } from "@mui/material"
import {ThemeProvider} from "@mui/material/styles"
import theme from "./components/Theme"
import Header from "./components/Header"
import Loginui from "./components/Login"
import { Provider } from "react-redux"
import { store, persistor } from "./store/Store"
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
   
  return (
    <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider theme={theme} >
    <Stack direction="column" sx={{bgcolor: 'primary.mai' ,
       height: '100vh'}}>
       <Header></Header>
       <Loginui></Loginui>
    </Stack>
    </ThemeProvider>
    </PersistGate>
    </Provider>
    </>
  )
}

export default App

