
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass dark:bg-black/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold">Portfolio</a>
        
        <div className="flex items-center gap-8">
          <div className="hidden sm:flex items-center gap-6">
            <a href="#about" className="hover:text-foreground/80 transition-colors">About</a>
            <a href="#projects" className="hover:text-foreground/80 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-foreground/80 transition-colors">Contact</a>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="rounded-full"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
