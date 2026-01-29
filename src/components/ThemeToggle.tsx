import { useTheme } from '@/hooks/use-theme';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-muted border border-border transition-colors duration-300 hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary/50"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Track icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5">
        <Sun className="w-3.5 h-3.5 text-amber-500" />
        <Moon className="w-3.5 h-3.5 text-blue-400" />
      </div>
      
      {/* Slider thumb */}
      <div
        className={`absolute top-0.5 w-6 h-6 rounded-full bg-background border border-border shadow-md transition-all duration-300 ease-out flex items-center justify-center ${
          theme === 'dark' ? 'left-7' : 'left-0.5'
        }`}
      >
        {theme === 'dark' ? (
          <Moon className="w-3.5 h-3.5 text-blue-400" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-amber-500" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
