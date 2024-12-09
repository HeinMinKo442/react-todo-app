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
      className="flex flex-col p-2"
      style={{
        background: mode === "dark" ? "black" : "white",
        color: mode === "dark" ? "white" : "black",
      }}
    >
      <div className="flex flex-row gap-2 justify-between items-center">
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="New task"
          className="w-full py-2 px-4 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => {
            setDeadline(e.target.value);
          }}
        />
        <button
          onClick={() => handleAdd(content, deadline)}
          className="bg-green-500 text-white rounded-md py-2 px-3 mt-2"
        >
          Add
        </button>
      </div>
      <span className="mt-2 text-red-500 text-center">{error}</span>
    </div>
  );
};

export default TodoForm;
