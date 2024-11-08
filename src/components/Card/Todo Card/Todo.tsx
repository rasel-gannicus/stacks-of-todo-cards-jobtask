import { Task } from "../Card";
import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";
import TodoMid from "./TodoMid";

const Todo = ({ task }: { task: Task }) => {
  return (
    <div className="bg-white dark:bg-slate-500 mt-8 py-5 px-3 rounded-md gap-5 flex flex-col ">
      {/* --- Todo Header --- */}
      <TodoHeader clientName={task.clientName} assignee={task.assignee}  />

      {/* --- Todo description --- */}
      <TodoMid description={task.description} status={task.status} />

      {/* --- Todo Footer --- */}
      <TodoFooter comments={task.comments} attachments={task.attachments} date={task.date} teamSize={task.teamSize} />
    </div>
  );
};

export default Todo;
