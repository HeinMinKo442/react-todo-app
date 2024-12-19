import { useContext } from "react";
import { AppContext } from "../Theme";

const TodoForm = ({
  content,
  setContent,
  handleAdd,
  error,
  deadline,
  setDeadline,
}) => {
  const { mode } = useContext(AppContext);

  return (
    <div
      className={` flex flex-col align-middle p-2 ${
        mode == "dark"
          ? "bg-dark-bg text-dark-textPrimary"
          : "bg-light-bg text-light-textPrimary"
      }`}
    >
      <div className="flex flex-row gap-2 justify-between items-center">
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="New task"
          className={`w-full py-2 px-4 border focus:outline-none focus:ring focus:ring-blue-500 rounded-lg ${
            mode == "dark"
              ? "bg-dark-bg placeholder-dark-textSecondary focus:ring-dark-textAccent border-dark-border"
              : "bg-light-bg placeholder-light-textSecondary focus:ring-light-textAccent border-light-border"
          }`}
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => {
            setDeadline(e.target.value);
          }}
          className={`py-2 px-4 border cursor-pointer focus:outline-none focus:ring  rounded-lg ${
            mode == "dark"
              ? "bg-dark-bg  border-dark-border"
              : "bg-light-bg placeholder-light-textSecondary  border-light-border"
          }`}
        />
        <button
          onClick={() => handleAdd(content, deadline)}
          className={` rounded-md py-2 px-3 mt-2 ${
            mode == "dark"
              ? "bg-dark-btnPrimary hover:bg-dark-btnHover text-dark-textPrimary"
              : "bg-light-btnPrimary hover:bg-light-btnHover text-light-textPrimary"
          }`}
        >
          Add
        </button>
      </div>
      <span className="mt-2 text-red-500 text-center">{error}</span>
    </div>
  );
};

export default TodoForm;
