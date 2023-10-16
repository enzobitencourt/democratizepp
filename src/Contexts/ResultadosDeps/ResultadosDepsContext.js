import React, { createContext, useContext, useState } from 'react';

const ResultadosDepsContext = createContext();

export const ResultadosDepsProvider = ({ children }) => {
  const [resultadosDeps, setResultadosDeps] = useState([]);
  const [tipos, setTipos] = useState()

  const value = {
    resultadosDeps,
    setResultadosDeps,
    tipos,
    setTipos
  };

  return (
    <ResultadosDepsContext.Provider value={value}>
      {children}
    </ResultadosDepsContext.Provider>
  );
};

export const useResultadosDeps = () => {
  const context = useContext(ResultadosDepsContext);
  if (!context) {
    throw new Error("useResultadosDeps deve ser usado dentro de um ResultadosDepsProvider");
  }
  return context;
};
