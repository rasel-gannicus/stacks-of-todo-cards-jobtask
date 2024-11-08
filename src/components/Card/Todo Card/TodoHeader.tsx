import userImg1 from "../../../assets/img/boy.png";
import userImg2 from "../../../assets/img/man.png";

const TodoHeader = ({clientName, assignee}: { clientName: string; assignee: string }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 justify-center items-center">
        <span className="overflow-hidden w-10 h-10 rounded-full flex justify-center items-center">
          <img src={userImg1} alt="" className="w-full " />
        </span>
        <p className="text-sm font-bold text-gray-600">{clientName || "Client Name"}</p>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <span className="overflow-hidden w-10 h-10 rounded-full flex justify-center items-center">
          <img src={userImg2} alt="" className="w-full " />
        </span>
        <p className="text-sm font-bold text-gray-600">{assignee || "Sadik Istiak"}</p>
      </div>
    </div>
  );
};

export default TodoHeader;
