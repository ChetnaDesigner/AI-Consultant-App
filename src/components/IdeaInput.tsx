function IdeaInput() {
  return (
    <div className="animate-fade-in-up  w-full max-w-4xl space-y-4">
      <textarea
        placeholder="Describe your app idea... Example: I want to build a food delivery app where users can order food, track delivery, make payments, and restaurants can manage menus."
        className="min-h-[200px] max-h-[480px] w-full resize-y rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-6 text-white backdrop-blur-sm placeholder:text-slate-500 shadow-sm transition-all duration-300 focus:-translate-y-0.5 focus:border-violet-500/50 focus:shadow-lg focus:shadow-violet-500/10 focus:ring-2 focus:ring-violet-500/20 focus:outline-none"
      />

      <div className="animate-fade-in-up stagger-2 flex justify-end">
        <button
          type="button"
          className="landing-cta-btn animate-landing-blur-in stagger-5 mt-10 rounded-xl px-8 py-3.5 text-sm font-semibold text-white cursor-pointer"
        >
          Generate Proposal
        </button>
      </div>
    </div>
  );
}

export default IdeaInput;
