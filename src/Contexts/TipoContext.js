import React, { createContext, useContext, useState } from "react";

const TipoContext = createContext();

export const TipoProvider = ({ children }) => {
  const [tipo, setTipo] = useState(""); // Valor inicial vazio

  return (
    <TipoContext.Provider value={{ tipo, setTipo }}>
      {children}
    </TipoContext.Provider>
  );
};

export const useTipo = () => {
  const context = useContext(TipoContext);
  if (!context) {
    throw new Error("useTipo deve ser usado dentro de um TipoProvider");
  }
  return context;
};
