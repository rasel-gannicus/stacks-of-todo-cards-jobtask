const Card = () => {
  return (
    <div className="w-80 shadow-lg bg-[#F2F4F7] py-5 px-3   ">
      {/* --- card header --- */}
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-2 rounded-full overflow-hidden">
          <div className="w-7 h-7 bg-[#00B5FF]"></div>
          <h2 className="font-semibold text-gray-600">To Do</h2>
        </div>
        <div className=" bg-slate-200 w-8 h-8 flex justify-center items-center rounded">
          <p className="text-gray-600 font-semibold">0</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
