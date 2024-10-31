import { useState } from "react";
import { createContext } from "react";
import App from "./App";

export const AppContext = createContext();

const Theme = () => {
  const [mode, setMode] = useState("dark");
  return (
    <AppContext.Provider value={{ mode, setMode }}>
      <App />
    </AppContext.Provider>
  );
};

export default Theme;
