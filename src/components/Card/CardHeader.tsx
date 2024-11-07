const CardHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-2 rounded-full overflow-hidden">
        <div className="w-7 h-7 bg-[#00B5FF]"></div>
        <h2 className="font-semibold text-gray-600">To Do</h2>
      </div>
      <div className=" bg-slate-200 w-8 h-8 flex justify-center items-center rounded">
        <p className="text-gray-600 font-semibold">0</p>
      </div>
    </div>
  );
};

export default CardHeader;
