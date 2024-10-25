import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const [theme, setThemeState] = React.useState("system");
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const darkMode =
        theme === "dark" ||
        (theme === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      setIsDark(darkMode);
      document.documentElement.classList[darkMode ? "add" : "remove"]("dark");
    }
  }, [theme]);

  const handleToggle = () => {
    setThemeState(prevTheme => {
      const newTheme = prevTheme === "dark" ? "theme-light" : "dark";
      return newTheme;
    });
  };
  

  return (
    <Button variant="outline" size="icon" onClick={handleToggle}>
      {isDark ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" color="black" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
