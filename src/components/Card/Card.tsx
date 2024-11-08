import CardHeader from "./CardHeader";
import Todo from "./Todo Card/Todo";

export type Task = {
  clientName: string;
  assignee: string;
  description: string;
  teamSize: string;
  comments: number;
  attachments: number;
  status: string;
  date: string;
};

type Column = {
  title: string;
  color ? : string ;
  tasks: Task[];
};

const Card = ({ data }: { data: Column }) => {
  console.log("🚀 ~ Card ~ data:", data)
  return (
    <div className="w-[500px]  shadow-lg bg-[#F2F4F7] dark:bg-slate-800 py-5 px-3  max-h-screen overflow-y-auto custom-scrollbar ">
      {/* --- Card header --- */}
      <CardHeader title={data.title} color={data.color} />

      {/* --- Todo --- */}
      {
        data.tasks.map((singleTask : Task) => <Todo />)
      }
    </div>
  );
};

export default Card;
