"use client";

import { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  return (
    <CursorContext.Provider value={{ isCursorVisible, setIsCursorVisible }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);