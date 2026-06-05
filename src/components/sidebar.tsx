import { useSidebar } from "../context/sidebarcontext";

const navItems = [
  { label: "Dashboard", icon: "▦", active: true },
  { label: "History", icon: "↻" },
  { label: "Saved Projects", icon: "★" },
  { label: "Templates", icon: "▤" },
  { label: "Settings", icon: "⚙" },
];

const recentProjects = [
  { name: "Food Delivery App", time: "2 min ago", color: "bg-orange-500" },
  { name: "Fitness Tracking App", time: "1 hr ago", color: "bg-emerald-500" },
  { name: "E-commerce Platform", time: "3 hr ago", color: "bg-blue-500" },
  { name: "Social Media App", time: "Yesterday", color: "bg-pink-500" },
  { name: "Learning Management", time: "2 days ago", color: "bg-violet-500" },
];

function Sidebar() {
  const { collapsed, toggleSidebar } = useSidebar();
  const iconOnly = collapsed;

  return (
    <aside
      className={`flex shrink-0 flex-col border-r border-border bg-sidebar transition-[width,padding] duration-300 ease-in-out ${
        iconOnly ? "w-[72px]" : "w-[260px]"
      }`}
    >
      <div
        className={`border-b border-border transition-all duration-300 ${
          iconOnly ? "px-3 py-4" : "px-5 py-5"
        }`}
      >
        <button
          type="button"
          onClick={toggleSidebar}
          aria-label={iconOnly ? "Expand sidebar" : "Collapse sidebar"}
          className={`group flex w-full items-center rounded-xl transition-all duration-200 hover:bg-surface/60 active:scale-[0.98] ${
            iconOnly ? "justify-center" : "gap-3 px-1 py-1"
          }`}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-lg transition-transform duration-200 group-hover:scale-110 group-active:animate-logo-pop">
            🤖
          </span>
          {!iconOnly && (
            <span className="sidebar-brand-text min-w-0 text-left">
              <span className="block truncate font-bold text-heading">
                AI Consultant
              </span>
              <span className="block truncate text-xs text-body">
                Your AI Project Partner
              </span>
            </span>
          )}
        </button>
      </div>

      <div
        className={`flex flex-1 flex-col py-5 transition-all duration-300 ${
          iconOnly ? "px-2" : "px-4"
        }`}
      >
        <button
          type="button"
          title="New Project"
          className={`gradient-btn animate-fade-in-up mb-6 flex items-center justify-center rounded-xl text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 ${
            iconOnly ? "mx-auto h-10 w-10" : "w-full gap-2 px-4 py-3"
          }`}
        >
          <span className="text-lg leading-none transition-transform duration-200 group-hover:rotate-90">
            +
          </span>
          {!iconOnly && "New Project"}
        </button>

        <nav className="space-y-1">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              type="button"
              title={item.label}
              aria-label={item.label}
              style={{ animationDelay: `${index * 50}ms` }}
              className={`hover-lift animate-slide-in-right flex w-full items-center rounded-xl text-sm font-medium ${
                iconOnly
                  ? "mx-auto h-10 w-10 justify-center"
                  : "gap-3 px-3 py-2.5"
              } ${
                item.active
                  ? "bg-indigo-500/15 text-indigo-400"
                  : "text-body hover:bg-surface hover:text-heading"
              }`}
            >
              <span
                className={`transition-transform duration-200 hover:scale-110 ${
                  iconOnly ? "text-base" : "w-5 text-center"
                }`}
              >
                {item.icon}
              </span>
              {!iconOnly && item.label}
            </button>
          ))}
        </nav>

        {!iconOnly && (
          <>
            <div className="animate-fade-in mt-8">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Recent Projects
                </p>
                <button
                  type="button"
                  className="text-xs text-indigo-400 transition hover:text-indigo-300"
                >
                  View All
                </button>
              </div>
              <div className="space-y-1">
                {recentProjects.map((project, index) => (
                  <button
                    key={project.name}
                    type="button"
                    style={{ animationDelay: `${index * 60}ms` }}
                    className="hover-lift animate-fade-in-up flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left hover:bg-surface"
                  >
                    <span
                      className={`h-8 w-8 shrink-0 rounded-lg ${project.color} opacity-90 transition-transform duration-200 hover:scale-105`}
                    />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-heading">
                        {project.name}
                      </p>
                      <p className="text-xs text-muted">{project.time}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="animate-scale-in stagger-3 mt-auto rounded-2xl border border-border bg-surface p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xl">👑</span>
                <p className="font-semibold text-heading">Upgrade to Pro</p>
              </div>
              <p className="mb-3 text-xs leading-5 text-body">
                Unlock unlimited proposals, PDF export & priority AI.
              </p>
              <button
                type="button"
                className="gradient-btn w-full rounded-xl py-2 text-sm font-semibold text-white"
              >
                Upgrade Now
              </button>
            </div>
          </>
        )}

        {iconOnly && (
          <div className="mt-auto space-y-2">
            {recentProjects.slice(0, 3).map((project, index) => (
              <button
                key={project.name}
                type="button"
                title={project.name}
                aria-label={project.name}
                style={{ animationDelay: `${index * 80}ms` }}
                className={`animate-scale-in mx-auto block h-8 w-8 rounded-lg ${project.color} opacity-90 transition-transform duration-200 hover:scale-110`}
              />
            ))}
            <button
              type="button"
              title="Upgrade to Pro"
              aria-label="Upgrade to Pro"
              className="animate-scale-in stagger-3 mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-lg transition-transform duration-200 hover:scale-110"
            >
              👑
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
