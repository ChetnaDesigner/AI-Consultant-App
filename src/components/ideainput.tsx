function IdeaInput() {
  return (
    <div className="animate-fade-in-up mx-auto w-full max-w-4xl space-y-4">
      <textarea
        placeholder="Describe your app idea... Example: I want to build a food delivery app where users can order food, track delivery, make payments, and restaurants can manage menus."
        className="min-h-[200px] max-h-[480px] w-full resize-y rounded-2xl border border-border bg-input px-5 py-4 text-sm leading-6 text-heading placeholder:text-muted shadow-sm transition-all duration-300 focus:-translate-y-0.5 focus:border-indigo-500 focus:shadow-lg focus:shadow-indigo-500/10 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
      />

      <div className="animate-fade-in-up stagger-2 flex justify-end">
        <button
          type="button"
          className="gradient-btn rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25"
        >
          Generate Proposal
        </button>
      </div>
    </div>
  );
}

export default IdeaInput;
