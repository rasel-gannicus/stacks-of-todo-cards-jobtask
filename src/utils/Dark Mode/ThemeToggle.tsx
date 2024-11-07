import { IoSunny } from "react-icons/io5";
import { useDarkMode } from "./DarkModeContext";
import { FaMoon } from "react-icons/fa";

export const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-slate-900 dark:bg-gray-100 rounded transition"
    >
      {darkMode ? (
        <IoSunny className="w-5 h-5 text-orange-400" />
      ) : (
        <FaMoon className=" w-5 h-5 text-white" />
      )}
    </button>
  );
};
