
import { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/switch';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage or default to false
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="flex items-center space-x-2">
      <Sun className={`w-4 h-4 transition-colors ${isDark ? 'text-gray-400' : 'text-perito-secondary'}`} />
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-perito-primary"
      />
      <Moon className={`w-4 h-4 transition-colors ${isDark ? 'text-perito-secondary' : 'text-gray-400'}`} />
    </div>
  );
};

export default ThemeToggle;
