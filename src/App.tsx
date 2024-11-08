import axios from "axios";
import "./App.css";
import Card from "./components/Card/Card";
import { ThemeToggle } from "./utils/Dark Mode/ThemeToggle";
import { useEffect, useState } from "react";

function App() {
  const [columns, setColumns] = useState([]);
  // console.log("🚀 ~ App ~ columns:", columns);

  useEffect(() => {
    // Fetch data from your Node.js server
    axios
      .get("http://localhost:2500/api/v1/columns")
      .then((response) => {
        setColumns(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="min-h-screen   flex justify-center items-center py-10 dark:bg-black ">
      <div className="absolute top-10 right-10">
        <ThemeToggle />
      </div>
      <div className="container overflow-x-scroll max-h-[95vh]   py-10 px-5 flex gap-5">
        {columns.map((column: any) => (
          <div key={column.title} className="flex-shrink-0 min-w-[200px]">
            <Card data={column} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
