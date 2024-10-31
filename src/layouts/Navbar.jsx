import { useContext } from "react";
import { AppContext } from "../Theme";

const Navbar = () => {
  const { mode, setMode } = useContext(AppContext);

  return (
    <div className=" flex flex-row justify-between py-3 px-6">
      <div>
        <h1>My Todo App</h1>
      </div>
      <div className="flex flex-row gap-2">
        <button>Register</button>
        <button>Login</button>
        <button
          className="border text-white bg-slate-700 rounded-md px-2 py-1"
          onClick={() => {
            setMode(mode === "dark" ? "light" : "dark");
          }}
        >
          {mode === "dark" ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
