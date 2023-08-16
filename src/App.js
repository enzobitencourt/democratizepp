import PrincipalDeps from "./Pages/Deps&Sens/principal";
import StyledGlobal from "./StyledGlobal";
import { React } from "react";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
      <ChakraProvider 
      bgColor='#F5F5F5'>
      {/* <StyledGlobal /> */}
        <PrincipalDeps />
      </ChakraProvider>
    </>
  );
}

export default App;
