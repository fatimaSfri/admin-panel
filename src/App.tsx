import { Box, Stack } from "@mui/material"
import {ThemeProvider} from "@mui/material/styles"
import theme from "./components/Theme"
import Header from "./components/Header"
import Loginui from "./components/Login"
import { Provider } from "react-redux"
import store from "./store/Store"

const App = () => {
   
  return (
    <>
    <Provider store={store}>
    <ThemeProvider theme={theme} >
    <Stack direction="column" sx={{bgcolor: 'primary.mai' ,
       height: '100vh'}}>
       <Header></Header>
       <Loginui></Loginui>
    </Stack>
    </ThemeProvider>
    </Provider>
    </>
  )
}

export default App

