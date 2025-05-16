import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative rounded-full w-10 h-6 flex items-center justify-center transition-colors ${
        theme === 'dark' ? 'bg-indigo-800' : 'bg-indigo-200'
      }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className="sr-only">Toggle theme</span>
      <motion.div
        layout
        className={`absolute w-5 h-5 rounded-full flex items-center justify-center ${
          theme === 'dark' ? 'left-5 bg-gray-800' : 'left-1 bg-white'
        }`}
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      >
        {theme === 'dark' ? (
          <Moon className="h-3 w-3 text-indigo-200" />
        ) : (
          <Sun className="h-3 w-3 text-indigo-600" />
        )}
      </motion.div>
    </button>
  );
};
