import { useContext } from "react";
import { AppContext } from "../Theme";
import App from "../App";
import Navbar from "../layouts/Navbar";

const Home = () => {
  const { mode } = useContext(AppContext);
  return (
    <div
      className={`min-h-screen ${
        mode === "dark"
          ? "bg-dark-bg text-dark-textPrimary"
          : "bg-light-bg text-light-textPrimary"
      }`}
    >
      <Navbar />
      <App />
    </div>
  );
};

export default Home;
