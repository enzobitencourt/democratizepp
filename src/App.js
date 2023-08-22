import { React } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Rotas from "./Rotas/Rotas";
import Principal from "./Pages/Principal/Principal";

function App() {
  const styles = {
    global: () => ({
      body: {
        fontFamily: 'Poppins',
        bg: '#F5F5F5',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }})}

  const theme = extendTheme({styles})
  return (
    <>
    <ChakraProvider theme={theme}>
      <Principal/>
    </ChakraProvider>
    </>
  );
}

export default App;
