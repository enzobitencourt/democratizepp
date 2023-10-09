import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Rotas from "./Rotas/Rotas";
import { TipoProvider } from "./Contexts/TipoContext/TipoContext";
import { ResultadosDepsProvider } from "./Contexts/ResultadosDeps/ResultadosDepsContext";
import { ResultadosSensProvider } from "./Contexts/ResultadosSens/ResultadosSensContext";

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
      }
    })
  };

  const theme = extendTheme({ styles });

  return (
    <ChakraProvider theme={theme}>
      <TipoProvider>
        <ResultadosDepsProvider>
          <ResultadosSensProvider>
            <Rotas />
          </ResultadosSensProvider>
        </ResultadosDepsProvider>
      </TipoProvider>
    </ChakraProvider>
  );
}

export default App;
