import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";
import TodoMid from "./TodoMid";

const Todo = () => {
  return (
    <div className="bg-white dark:bg-slate-500 mt-8 py-5 px-3 rounded-md gap-5 flex flex-col ">
      {/* --- Todo Header --- */}
      <TodoHeader />

      {/* --- Todo description --- */}
      <TodoMid />

      {/* --- Todo Footer --- */}
      <TodoFooter />
    </div>
  );
};

export default Todo;
