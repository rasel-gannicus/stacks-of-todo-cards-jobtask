import { BiConversation } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa6";
import userImg3 from "../../../assets/img/man (1).png";
import userImg4 from "../../../assets/img/man (2).png";

const TodoFooter = () => {
  return (
    <div className="flex justify-between items-center">
      <span className="overflow-hidden w-8 h-8 rounded-full flex justify-center items-center">
        <img src={userImg3} alt="" className="w-full " />
      </span>
      <span className="overflow-hidden w-8 h-8 rounded-full flex justify-center items-center">
        <img src={userImg4} alt="" className="w-full " />
      </span>
      <span className="overflow-hidden w-8 h-8 rounded-full flex justify-center items-center font-semibold text-gray-600 bg-[#F2F4F7] text-sm ">
        <p>12+</p>
      </span>
      <span className="flex gap-2 justify-center items-center font-semibold text-gray-600">
        <BiConversation className="w-6 h-6 text-gray-500" />
        <p>15</p>
      </span>
      <span className="flex gap-2 justify-center items-center font-semibold">
        <FaPaperclip className="w-4 h-4 text-gray-800" />
        <p className="text-gray-600">25</p>
      </span>
      <span className="flex gap-1 justify-center items-center font-semibold">
        <FaCalendarAlt className="w-4 h-4 text-gray-500" />
        <p className="text-gray-600 text-sm">13-12-2022</p>
      </span>
    </div>
  );
};

export default TodoFooter;
