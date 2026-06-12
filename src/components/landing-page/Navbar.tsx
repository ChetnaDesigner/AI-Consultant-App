import { BrandLogoIcon } from "../icons";

function LogoIcon() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 transition-transform duration-300 hover:scale-110">
      <BrandLogoIcon className="text-cyan-400" size={20} />
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
