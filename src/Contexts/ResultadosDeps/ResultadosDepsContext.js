import React, { createContext, useContext, useState } from 'react';

const ResultadosDepsContext = createContext();

export const ResultadosDepsProvider = ({ children }) => {
  const [resultadosDeps, setResultadosDeps] = useState([]);
  const [loadingDeps, setLoadingDeps] = useState(true);
  const [isVisibleDeps, setIsVisibleDeps] = useState(false);

  // Função para atualizar os resultados
  const atualizarResultadosDeps = (novosResultados) => {
    setResultadosDeps(novosResultados);
  };

  const value = {
    resultadosDeps,
    setResultadosDeps,
    loadingDeps,
    setLoadingDeps,
    isVisibleDeps,
    setIsVisibleDeps,
    atualizarResultadosDeps, // Adicione esta função ao contexto
  };

  return (
    <ResultadosDepsContext.Provider value={value}>
      {children}
    </ResultadosDepsContext.Provider>
  );
};

export const useResultadosDeps = () => {
  return useContext(ResultadosDepsContext);
};
