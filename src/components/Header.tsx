import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="10" cy="10" r="3.5" />
      <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.93 4.93l1.41 1.41M13.66 13.66l1.41 1.41M4.93 15.07l1.41-1.41M13.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M14.5 11.2A5.5 5.5 0 0 1 8.8 4.5 6 6 0 1 0 14.5 11.2Z" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M5 7.5 10 12.5 15 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Header() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="animate-fade-in relative flex h-16 items-center justify-end gap-5 border-b border-border bg-page/90 px-4 backdrop-blur-md md:px-8">
      <div className="flex items-center rounded-full border border-border bg-surface p-1">
        <button
          type="button"
          onClick={() => setTheme("light")}
          aria-pressed={theme === "light"}
          aria-label="Light mode"
          className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 ${
            theme === "light"
              ? "scale-105 bg-indigo-500 text-white shadow-md shadow-indigo-500/30"
              : "text-muted hover:scale-105 hover:text-heading"
          }`}
        >
          <SunIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => setTheme("dark")}
          aria-pressed={theme === "dark"}
          aria-label="Dark mode"
          className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 ${
            theme === "dark"
              ? "scale-105 bg-indigo-500 text-white shadow-md shadow-indigo-500/30"
              : "text-muted hover:scale-105 hover:text-heading"
          }`}
        >
          <MoonIcon className="h-4 w-4" />
        </button>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-haspopup="menu"
          className="flex items-center gap-2.5 rounded-lg px-1 py-1 transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c49b82] text-sm font-semibold text-white transition-transform duration-200 hover:scale-105">
            A
          </span>
          <span className="hidden text-sm font-medium text-heading sm:block">
            Ananya
          </span>
          <ChevronDownIcon
            className={`hidden h-4 w-4 text-heading transition-transform duration-300 sm:block ${
              menuOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {menuOpen && (
          <div className="animate-dropdown-in absolute right-0 z-20 mt-2 min-w-[140px] overflow-hidden rounded-xl border border-border bg-surface py-1 shadow-lg">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="w-full px-4 py-2.5 text-left text-sm font-medium text-red-500 transition-colors duration-200 hover:bg-red-500/10"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
