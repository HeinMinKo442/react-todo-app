import { useContext } from "react";
import { AppContext } from "../Theme";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { mode, setMode } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div className=" flex flex-row justify-between align-middle py-3 px-6">
      <p className="text-2xl font-bold text-yellow-600 font-serif w-full">
        Todo App
      </p>

      <div className="flex flex-row gap-6">
        <button
          className="hover:underline"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
        <button className="hover:underline" onClick={() => navigate("/login")}>
          Login
        </button>
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
