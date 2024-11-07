
import TodoFooter from "./Todo Card/TodoFooter";
import CardHeader from "./CardHeader";
import TodoHeader from "./Todo Card/TodoHeader";
import TodoMid from "./Todo Card/TodoMid";

const Card = () => {
  return (
    <div className="w-[500px] shadow-lg bg-[#F2F4F7] py-5 px-3   ">
      {/* --- Card header --- */}
      <CardHeader />

      {/* --- Todo --- */}
      <div className="bg-white mt-8 py-5 px-3 rounded-md gap-5 flex flex-col ">
        {/* --- Todo Header --- */}
        <TodoHeader />

        {/* --- Todo description --- */}
        <TodoMid />

        {/* --- Todo Footer --- */}
        <TodoFooter />
      </div>
    </div>
  );
};

export default Card;
