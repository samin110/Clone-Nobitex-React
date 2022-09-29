import React from "react";
import { createContext, useState } from "react";

export const cryptoPriceContext = createContext();
export const cryptoPriceContextDispatcher = createContext();

const CryptoContext = ({ children }) => {
  const [getCryptoDetailFromApi, setGetCryptoDetailFromApi] = useState([]);

  return (
    <cryptoPriceContext.Provider value={getCryptoDetailFromApi}>
      <cryptoPriceContextDispatcher.Provider value={setGetCryptoDetailFromApi}>
        {children}
      </cryptoPriceContextDispatcher.Provider>
    </cryptoPriceContext.Provider>
  );
};

export default CryptoContext;
