const EditForm = ({ editInput, setEditInput, handleEditSubmit }) => {
  return (
    <form onSubmit={handleEditSubmit}>
      <input
        type="text"
        className="w-full py-2 px-4 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 rounded-lg"
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
