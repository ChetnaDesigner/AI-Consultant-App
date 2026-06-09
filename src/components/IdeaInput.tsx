import { useState, type ChangeEvent } from "react";
import { generateProposal } from "../utils/generateProposal";

function IdeaInput() {
  const [appIdea, setAppIdea] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleIdeaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAppIdea(e.target.value);
    if (error) setError("");
  };

  const handleGenerate = async () => {
    const capturedIdea = appIdea.trim();

    if (!capturedIdea) {
      setError("Please describe your app idea before generating a proposal.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      generateProposal(capturedIdea);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-fade-in-up  w-full max-w-4xl space-y-1">
      <textarea
        value={appIdea}
        onChange={handleIdeaChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "idea-error" : undefined}
        placeholder="Describe your app idea... Example: I want to build a food delivery app where users can order food, track delivery, make payments, and restaurants can manage menus."
        className={`min-h-[200px] max-h-[480px] w-full resize-y rounded-2xl border bg-white/5 px-5 py-4 text-sm leading-6 text-white backdrop-blur-sm placeholder:text-slate-500 shadow-sm transition-all duration-300 focus:-translate-y-0.5 focus:shadow-lg focus:outline-none ${
          error
            ? "border-red-500/60 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20"
            : "border-white/10 focus:border-violet-500/50 focus:shadow-violet-500/10 focus:ring-2 focus:ring-violet-500/20"
        }`}
      />

      {error && (
        <p id="idea-error" role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      <div className="animate-fade-in-up stagger-2 flex justify-start">
        <button
          type="button"
          onClick={handleGenerate}
          disabled={isLoading}
          aria-busy={isLoading}
          className={`landing-cta-btn animate-landing-blur-in stagger-5 mt-6 rounded-xl px-8 py-3.5 text-sm font-semibold text-white ${
            isLoading ? "cursor-not-allowed opacity-60" : "cursor-pointer"
          }`}
        >
          {isLoading ? "Generating..." : "Generate Proposal"}
        </button>
      </div>
    </div>
  );
}

export default IdeaInput;
