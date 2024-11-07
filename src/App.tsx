import "./App.css";
import Card from "./components/Card/Card";
import { useDarkMode } from "./utils/Dark Mode/DarkModeContext";
import { ThemeToggle } from "./utils/Dark Mode/ThemeToggle";

function App() {
  return (
    <div className="min-h-[60vh] flex justify-center items-center py-10 dark:bg-black ">
      <div className="absolute top-10 right-10">
        <ThemeToggle />
      </div>
      <Card />
    </div>
  );
}

export default App;
