const CardHeader = ({ title, color }: { title: string; color: string }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-2 rounded-full overflow-hidden">
        <div className={`w-7 h-7`} style={{ backgroundColor: color }}></div>
        <h2 className="font-semibold text-gray-600">{title}</h2>
      </div>
      <div className=" bg-slate-200 w-8 h-8 flex justify-center items-center rounded">
        <p className="text-gray-600 font-semibold">0</p>
      </div>
    </div>
  );
};

export default CardHeader;
