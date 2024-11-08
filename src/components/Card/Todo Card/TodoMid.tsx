import { BsStack } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";

const TodoMid = ({
  description,
  status,
}: {
  description: string;
  status: string;
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 justify-center items-center">
        <BsStack className="w-4 h-4 text-gray-500 dark:text-slate-200" />
        <p className="text-sm font-semibold text-gray-400">
          {description || "Lorem ipsum, dolor sit amet cons"}
        </p>
      </div>
      <div className="flex gap-1  bg-[#F2F4F7] px-2 py-1 rounded-lg justify-center items-center font-semibold text-gray-600">
        <FaClipboardList className="w-4 h-4 " />
        <p className="">{status || "1/2"}</p>
      </div>
    </div>
  );
};

export default TodoMid;
