import { useNavigate } from "react-router-dom";
import { useApp } from "../Theme";

const Login = () => {
  const { mode } = useApp();
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100vh",
      }}
      className={`${
        mode == "dark"
          ? "bg-dark-bg text-dark-textPrimary"
          : "bg-light-bg text-light-textPrimary"
      }`}
    >
      <button
        onClick={() => navigate(`/`)}
        className="bg-green-500 px-3 py-1 rounded-lg border-none"
      >
        Go Back Nigga
      </button>

      <div className="flex items-center justify-center min-h-screen">
        <div
          className={`py-4 px-6 rounded-md flex gap-5 flex-col items-center w-1/3 border-2  shadow-md`}
        >
          <h1 className="text-2xl mb-5 font-sans font-semibold">Login</h1>

          <div className="flex flex-col w-full mb-2">
            <label className="text-lg mb-1">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className={`w-full px-4 py-2 rounded border ${
                mode == "dark"
                  ? "bg-dark-surface text-dark-textPrimary placeholder-dark-textSecondary border-dark-border focus:ring-dark-textAccent"
                  : "bg-light-surface text-light-textPrimary placeholder-light-textSecondary border-light-border focus:ring-light-textAccent"
              } focus:outline-none focus:ring-2`}
            />
          </div>

          <div className="flex flex-col w-full mb-2">
            <label className="text-lg mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className={`w-full py-2 px-4 rounded border ${
                mode == "dark"
                  ? "bg-dark-surface text-dark-textPrimary placeholder-dark-textSecondary border-dark-border focus:ring-dark-textAccent"
                  : "bg-light-surface text-light-textPrimary placeholder-light-textSecondary border-light-border focus:ring-light-textAccent"
              } focus:outline-none focus:ring-2`}
            />
          </div>

          <button
            className={`w-full py-1 rounded-md ${
              mode == "dark"
                ? "bg-dark-btnPrimary text-dark-textPrimary hover:bg-dark-btnHover"
                : "bg-light-btnPrimary text-light-textPrimary hover:bg-light-btnHover"
            }`}
          >
           Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
