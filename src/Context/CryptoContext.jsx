import React from "react";
import { createContext, useState } from "react";

export const cryptoContext = createContext();
export const cryptoContextDispatch = createContext();

const CryptoContext = ({ children }) => {
  const [getCryptoDataFromApiForHomePageTable, setGetCryptoDataFromApiForHomePageTable] = useState([]);
  const [getDataFromApiForPagination, setGetDataFromApiForPagination] = useState([]);

  return (
    <cryptoContext.Provider value={{ getCryptoDataFromApiForHomePageTable, getDataFromApiForPagination }}>
      <cryptoContextDispatch.Provider value={{ setGetCryptoDataFromApiForHomePageTable, setGetDataFromApiForPagination }}>
        {children}
      </cryptoContextDispatch.Provider>
    </cryptoContext.Provider>
  );
};

export default CryptoContext;
