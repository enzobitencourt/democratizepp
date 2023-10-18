import React, { createContext, useContext, useState } from 'react';

const ResultadosSensContext = createContext();

export const ResultadosSensProvider = ({ children }) => {
  const [resultadosSens, setResultadosSens] = useState([]);
  const [tipos, setTipos] = useState([])
  const [pesquisado, setPesquisado] = useState()

  const value = {
    resultadosSens,
    setResultadosSens,
    tipos, 
    setTipos,
    pesquisado,
    setPesquisado
  };

  return (
    <ResultadosSensContext.Provider value={value}>
      {children}
    </ResultadosSensContext.Provider>
  );
};

export const useResultadosSens = () => {
  const context = useContext(ResultadosSensContext);
  if (!context) {
    throw new Error("useResultadosDeps deve ser usado dentro de um ResultadosDepsProvider");
  }
  return context;
};
