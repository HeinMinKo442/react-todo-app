import { useState } from "react";
import { createContext } from "react";
import Router from "./routers/router";

export const AppContext = createContext();

const Theme = () => {
  const [mode, setMode] = useState("dark");

  return (
    <AppContext.Provider value={{ mode, setMode }}>
      <Router />
    </AppContext.Provider>
  );
};

export default Theme;
