import React, { createContext, useContext, useState } from 'react';

const ResultadosSensContext = createContext();

export const ResultadosSensProvider = ({ children }) => {
  const [resultadosSens, setResultadosSens] = useState([]);
  const [loadingSens, setLoadingSens] = useState(true);
  const [isVisibleSens, setIsVisibleSens] = useState(false);

  // Lógica para carregar os resultados de ResultadosSens

  const value = {
    resultadosSens,
    setResultadosSens,
    loadingSens,
    setLoadingSens,
    isVisibleSens,
    setIsVisibleSens,
  };

  return (
    <ResultadosSensContext.Provider value={value}>
      {children}
    </ResultadosSensContext.Provider>
  );
};

export const useResultadosSens = () => {
  return useContext(ResultadosSensContext);
};
