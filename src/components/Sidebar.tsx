import { useSidebar } from "../context/SidebarContext";
import { recentProjects } from "../constants/sidebarData";
import {
  BrandLogoIcon,
  CrownIcon,
  DashboardIcon,
  HistoryIcon,
  PlusIcon,
  SettingsIcon,
  StarIcon,
  TemplatesIcon,
} from "./icons";

const navItems = [
  { label: "Dashboard", Icon: DashboardIcon, active: true },
  { label: "History", Icon: HistoryIcon },
  { label: "Saved Projects", Icon: StarIcon },
  { label: "Templates", Icon: TemplatesIcon },
  { label: "Settings", Icon: SettingsIcon },
];

function Sidebar() {
  const { collapsed, toggleSidebar } = useSidebar();
  const iconOnly = collapsed;

  return (
    <aside
      className={`flex shrink-0 flex-col border-r border-white/10 bg-white/[0.03] backdrop-blur-sm transition-[width,padding] duration-300 ease-in-out ${
        iconOnly ? "w-[72px]" : "w-[260px]"
      }`}
    >
      <div
        className={`border-b border-white/10 transition-all duration-300 ${
          iconOnly ? "px-3 py-4" : "px-5 py-5"
        }`}
      >
        <button
          type="button"
          onClick={toggleSidebar}
          aria-label={iconOnly ? "Expand sidebar" : "Collapse sidebar"}
          className={`group flex w-full items-center rounded-xl transition-all duration-200 hover:bg-white/5 active:scale-[0.98] ${
            iconOnly ? "justify-center" : "gap-3 px-1 py-1"
          }`}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 transition-transform duration-200 group-hover:scale-110 group-active:animate-logo-pop">
            <BrandLogoIcon className="text-cyan-400" size={20} />
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
          className={`landing-cta-btn animate-fade-in-up mb-6 flex items-center justify-center rounded-xl text-sm font-semibold text-white ${
            iconOnly ? "mx-auto h-10 w-10" : "w-full gap-2 px-4 py-3"
          }`}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center transition-transform duration-200 group-hover:rotate-90">
            <PlusIcon size={18} />
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
                  ? "bg-violet-500/15 text-violet-300"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span
                className={`flex shrink-0 items-center justify-center transition-transform duration-200 hover:scale-110 ${
                  iconOnly ? "" : "w-5"
                }`}
              >
                <item.Icon size={18} />
              </span>
              {!iconOnly && item.label}
            </button>
          ))}
        </nav>

        {!iconOnly && (
          <>
            <div className="animate-fade-in mt-8">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold text-muted">
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
                    className="hover-lift animate-fade-in-up flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left hover:bg-white/5"
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

            <div className="animate-scale-in stagger-3 mt-auto rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="mb-2 flex items-center gap-2">
                <CrownIcon className="text-amber-400" size={20} />
                <p className="font-semibold text-heading">Upgrade to Pro</p>
              </div>
              <p className="mb-3 text-xs leading-5 text-body">
                Unlock unlimited proposals, PDF export & priority AI.
              </p>
              <button
                type="button"
                className="landing-cta-btn w-full rounded-xl py-2 text-sm font-semibold text-white"
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
              className="animate-scale-in stagger-3 mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-transform duration-200 hover:scale-110"
            >
              <CrownIcon className="text-amber-400" size={18} />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
