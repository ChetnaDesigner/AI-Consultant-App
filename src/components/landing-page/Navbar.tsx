function LogoIcon() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 transition-transform duration-300 hover:scale-110">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden
      >
        <rect x="3" y="5" width="14" height="2" rx="1" fill="#22D3EE" />
        <rect x="3" y="9" width="10" height="2" rx="1" fill="#22D3EE" />
        <rect x="3" y="13" width="6" height="2" rx="1" fill="#22D3EE" />
      </svg>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="animate-landing-slide-down mx-auto flex w-full max-w-5xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
      <div className="animate-landing-blur-in stagger-1 flex items-center gap-3">
        <LogoIcon />
        <span className="text-sm font-bold text-white sm:text-base">
          AI Consultant
        </span>
      </div>

      <div className="flex items-center gap-6">
        <a
          href="#features"
          className="landing-nav-link animate-landing-blur-in stagger-2 text-sm text-slate-400 hover:text-white"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="landing-nav-link animate-landing-blur-in stagger-3 text-sm text-slate-400 hover:text-white"
        >
          Pricing
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
