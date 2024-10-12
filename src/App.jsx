import { useState } from "react";
import TodoItem from "./TodoItem";
import EditForm from "./editForm";
import TodoForm from "./TodoForm";
import { CiSearch } from "react-icons/ci";
import { IoCreateOutline, IoClose } from "react-icons/io5";

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const App = () => {
  const [content, setContent] = useState("");
  const [todoList, setTodoList] = useState([
    { id: 1, content: "Study React from basic", deadline: "2024-9-19" },
    { id: 2, content: "To Visit Yangon", deadline: "2024-9-13" },
    { id: 3, content: "Yangon is Alone", deadline: "2024-9-28" },
  ]);
  const [showEdit, setShowEdit] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const [editData, setEditData] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [deadline, setDeadline] = useState(getTodayDate);
  const [error, setError] = useState("");

  // for seraching
  const [filteredSearch, setFileteredSearch] = useState([]);
  const [search, setSearch] = useState("");

  const handleAdd = (content, deadline) => {
    if (content == "") {
      setError("Input value is not empty");
    } else {
      const id = todoList.length ? todoList[todoList.length - 1].id + 1 : 1;
      setTodoList([...todoList, { id, content, deadline }]);

      setContent("");
      setError("");
      setFileteredSearch([]);
    }
  };

  const remove = (id) => {
    // console.log(id)
    setFileteredSearch(filteredSearch.filter((item) => item.id !== id));
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setEditData(item);
    setEditInput(item.content);
    setShowForm(true);
    setShowEdit(true);
    setShowSearch(false);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    if (!editInput.trim()) {
      setError("Task content cannot be empty");
      return;
    }

    const updatedTasks = todoList.map((task) =>
      task.id === editData.id ? { ...task, content: editInput } : task
    );

    setTodoList(updatedTasks);

    setEditInput("");
    setShowEdit(false);
    setEditData(null);
    setShowForm(false);
    setFileteredSearch([]);
    setError("");
  };

  const handleSearch = () => {
    setError("");

    if (!search.trim()) {
      setError("Search input is not empty");
      return;
    }
    const result = todoList.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
    if (result.length === 0) {
      setError(`No todo found for "${search}"`);
    }
    setFileteredSearch(result);
    setSearch("");
    // setError("");
  };

  return (
    <div className="mt-20 max-w-[640px] flex flex-col justify-end mx-auto border-2 p-4 rounded-md">
      <div className="flex flex-row gap-6 mb-3 justify-between items-center">
        {/* Button show/off add form  */}
        {showForm ? (
          <IoClose
            className="text-red-700 text-3xl cursor-pointer"
            onClick={() => {
              setShowForm(!showForm);
              setShowSearch(false);
            }}
          />
        ) : (
          <IoCreateOutline
            className="text-green-700 text-3xl cursor-pointer"
            onClick={() => {
              setShowForm(!showForm);
              setShowSearch(false);
            }}
          />
        )}

        {/* Search input and button for search feature */}
        {showSearch && (
          <div className="relative w-[70%]">
            <input
              type="text"
              placeholder="Search...."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className="w-full py-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSearch}
              className="absolute right-0 top-0 bottom-0 bg-slate-500 text-white py-1 px-4 rounded-r-md hover:bg-slate-600 focus:outline-none
              "
            >
              Search
            </button>
          </div>
        )}

        {/* Search Button */}
        <button
          onClick={() => {
            setShowSearch(!showSearch);
            setShowForm(false);
            setError("");
            setFileteredSearch([]);
          }}
          className="text-3xl font-bold text-gray-900"
        >
          <CiSearch />
        </button>
      </div>

      {/* Error Message */}
      {error ? <p className="text-red-500 text-center m-0 p-0">{error}</p> : ""}

      {/* Form Edit form and Add form */}
      {showForm && (
        <>
          {showEdit ? (
            <EditForm
              handleEditSubmit={handleEditSubmit}
              editData={editData}
              editInput={editInput}
              setEditInput={setEditInput}
            />
          ) : (
            <TodoForm
              content={content}
              setContent={setContent}
              deadline={deadline}
              setDeadline={setDeadline}
              handleAdd={handleAdd}
              error={error}
            />
          )}
        </>
      )}

      {/* Display Filetered Data and All todo list data */}
      <ul className="mt-4">
        {filteredSearch.length > 0 ? (
          filteredSearch.map((item) => (
            <TodoItem
              key={item.id}
              remove={remove}
              handleEdit={handleEdit}
              item={item}
            />
          ))
        ) : (
          <>
            {todoList.length > 0
              ? todoList.map((item) => (
                  <TodoItem
                    key={item.id}
                    remove={remove}
                    handleEdit={handleEdit}
                    item={item}
                  />
                ))
              : "No to List here!"}
          </>
        )}
      </ul>
    </div>
  );
};

export default App;
