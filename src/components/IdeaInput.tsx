import { useState, type ChangeEvent } from "react";
import { generateProposal } from "../utils/generateProposal";

const MIN_IDEA_LENGTH = 50;
const REQUIRED_MESSAGE = "Please enter your project idea";
const MIN_LENGTH_MESSAGE = `Please enter at least ${MIN_IDEA_LENGTH} characters describing your project idea`;

type IdeaInputProps = {
  onSuccess?: (idea: string) => void;
};

function validateIdea(idea: string): string | null {
  if (!idea) return REQUIRED_MESSAGE;
  if (idea.length < MIN_IDEA_LENGTH) return MIN_LENGTH_MESSAGE;
  return null;
}

function IdeaInput({ onSuccess }: IdeaInputProps) {
  const [appIdea, setAppIdea] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleIdeaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAppIdea(e.target.value);
    if (error) setError("");
  };

  const handleGenerate = async () => {
    const capturedIdea = appIdea.trim();
    const validationError = validateIdea(capturedIdea);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      generateProposal(capturedIdea);
      onSuccess?.(capturedIdea);
      setHasGenerated(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-fade-in-up w-full max-w-4xl space-y-3">
      <textarea
        value={appIdea}
        onChange={handleIdeaChange}
        disabled={isLoading}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "idea-error" : undefined}
        placeholder="Describe your app idea... Example: I want to build a food delivery app where users can order food, track delivery, make payments, and restaurants can manage menus."
        className={`min-h-[200px] max-h-[480px] w-full resize-y rounded-2xl border bg-white/5 px-5 py-4 text-sm leading-6 text-white backdrop-blur-sm placeholder:text-slate-500 shadow-sm transition-all duration-300 focus:-translate-y-0.5 focus:shadow-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 ${
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

      {isLoading && (
        <div
          role="status"
          aria-live="polite"
          className="animate-fade-in mt-3 rounded-2xl border border-violet-500/20 bg-violet-500/10 px-4 py-3 backdrop-blur-sm"
        >
          <div className="mb-2 flex items-center gap-3">
            <span className="proposal-spinner" aria-hidden />
            <p className="text-sm font-medium text-white">
              Generating Your Proposal...
            </p>
          </div>
          <div className="proposal-loading-bar w-full" aria-hidden />
        </div>
      )}

      <div className="animate-fade-in-up stagger-2 flex justify-start">
        <button
          type="button"
          onClick={handleGenerate}
          disabled={isLoading}
          aria-busy={isLoading}
          aria-disabled={isLoading}
          className={`landing-cta-btn animate-landing-blur-in stagger-5 mt-6 flex items-center gap-2.5 rounded-xl px-8 py-3.5 text-sm font-semibold text-white ${
            isLoading
              ? "pointer-events-none cursor-not-allowed opacity-80"
              : "cursor-pointer"
          }`}
        >
          {isLoading && <span className="proposal-spinner" aria-hidden />}
          {isLoading ? "Generating..." : "Generate Proposal"}
        </button>
      </div>
    </div>
  );
}

export default IdeaInput;
