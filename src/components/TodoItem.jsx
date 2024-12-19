import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

const TodoItem = ({ item, handleEdit, remove }) => {
  const [mark, setMark] = useState(false);

  const handleMark = () => {
    setMark(!mark);
  };
  return (
    <div className="">
      <li
        key={item.id}
        className="flex justify-between items-center py-2 border-b"
      >
        <div className="cursor-pointer" onClick={() => handleMark()}>
          {mark ? (
            <p className="line-through">{item.content}</p>
          ) : (
            <p>{item.content}</p>
          )}
          <p>{item.deadline}</p>
        </div>
        <div className="flex gap-4">
          <FaRegEdit
            onClick={() => handleEdit(item)}
            className="text-emerald-900 text-2xl cursor-pointer"
          />
          <AiOutlineDelete
            onClick={() => remove(item.id)}
            className="text-red-500 text-2xl cursor-pointer"
          />
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
