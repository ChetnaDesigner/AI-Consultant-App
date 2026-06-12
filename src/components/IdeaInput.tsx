import LoadingState from "./LoadingState";
import {
  GENERATE_BUTTON_LABEL,
  GENERATING_BUTTON_LABEL,
  IDEA_PLACEHOLDER,
  IDEA_PROMPT,
} from "../constants/ideaInput";
import { useIdeaInput } from "../hooks/useIdeaInput";

type IdeaInputProps = {
  onSuccess?: (idea: string) => void;
};

function IdeaInput({ onSuccess }: IdeaInputProps) {
  const {
    appIdea,
    error,
    isLoading,
    hasGenerated,
    handleIdeaChange,
    handleGenerate,
  } = useIdeaInput({ onSuccess });

  return (
    <div className="animate-fade-in-up w-full max-w-4xl space-y-3">
      {!hasGenerated && (
        <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
          {IDEA_PROMPT}
        </p>
      )}

      <textarea
        value={appIdea}
        onChange={handleIdeaChange}
        disabled={isLoading}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "idea-error" : undefined}
        placeholder={IDEA_PLACEHOLDER}
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

      {isLoading && <LoadingState className="mt-3" />}

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
          {isLoading && <LoadingState variant="inline" />}
          {isLoading ? GENERATING_BUTTON_LABEL : GENERATE_BUTTON_LABEL}
        </button>
      </div>
    </div>
  );
}

export default IdeaInput;
