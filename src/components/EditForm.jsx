import { useContext } from "react";
import { AppContext } from "../Theme";

const EditForm = ({ editInput, setEditInput, handleEditSubmit }) => {
  const { mode } = useContext(AppContext);
  return (
    <form
      onSubmit={handleEditSubmit}
      className={`${
        mode == "dark"
          ? "bg-dark-bg text-dark-textPrimary"
          : "bg-light-bg text-light-textPrimary"
      }`}
    >
      <input
        type="text"
        className={`w-full py-2 px-4 border focus:outline-none focus:ring rounded-lg ${
          mode == "dark"
            ? "bg-dark-bg placeholder-dark-textSecondary focus:ring-dark-textAccent border-dark-border"
            : "bg-light-bg placeholder-light-textSecondary focus:ring-light-textAccent border-light-border"
        }`}
        name="content"
        value={editInput}
        onChange={(e) => setEditInput(e.target.value)}
      />
      {/* {error && <p className="text-red-500">{error}</p>} */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg"
      >
        Update Task
      </button>
    </form>
  );
};
export default EditForm;
