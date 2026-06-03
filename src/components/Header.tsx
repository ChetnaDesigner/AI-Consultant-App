import { useTheme } from "../context/ThemeContext";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <circle cx="10" cy="10" r="3.5" />
      <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.93 4.93l1.41 1.41M13.66 13.66l1.41 1.41M4.93 15.07l1.41-1.41M13.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M14.5 11.2A5.5 5.5 0 0 1 8.8 4.5 6 6 0 1 0 14.5 11.2Z" />
    </svg>
  );
}

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header>
      <div className="mx-auto flex h-[72px] w-full max-w-full items-center justify-between border-b border-border bg-surface px-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div
            className="h-9 w-9 shrink-0 rounded-lg bg-indigo-600"
            aria-hidden
          />
          <span className="text-lg font-bold tracking-tight text-heading">
            AI Consultant
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div
            className="flex items-center rounded-full border border-border bg-page p-1"
            aria-label="Theme"
          >
            <button
              type="button"
              onClick={() => setTheme("light")}
              aria-pressed={theme === "light"}
              aria-label="Light mode"
              className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
                theme === "light"
                  ? "bg-surface text-heading shadow-sm"
                  : "text-muted hover:text-body"
              }`}
            >
              <SunIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setTheme("dark")}
              aria-pressed={theme === "dark"}
              aria-label="Dark mode"
              className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
                theme === "dark"
                  ? "bg-surface text-heading shadow-sm"
                  : "text-muted hover:text-body"
              }`}
            >
              <MoonIcon className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            className="rounded-xl border border-border bg-surface px-5 py-2 text-sm font-medium text-heading shadow-sm transition hover:opacity-80"
          >
            History
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
