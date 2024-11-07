import CardHeader from "./CardHeader";
import Todo from "./Todo Card/Todo";

const Card = () => {
  return (
    <div className="w-[500px]  shadow-lg bg-[#F2F4F7] dark:bg-slate-500 py-5 px-3  max-h-screen overflow-y-auto custom-scrollbar ">
      {/* --- Card header --- */}
      <CardHeader />

      {/* --- Todo --- */}
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
};

export default Card;
