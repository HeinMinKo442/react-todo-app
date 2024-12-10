import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import Router from "./routers/router";

export const AppContext = createContext();

const Theme = () => {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <AppContext.Provider value={{ mode, setMode }}>
      <Router />
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};

export default Theme;
