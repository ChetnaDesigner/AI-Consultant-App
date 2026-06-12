type LoadingStateProps = {
  message?: string;
  showProgressBar?: boolean;
  variant?: "banner" | "inline";
  className?: string;
};

function LoadingState({
  message = "Generating Your Proposal...",
  showProgressBar = true,
  variant = "banner",
  className = "",
}: LoadingStateProps) {
  if (variant === "inline") {
    return <span className={`proposal-spinner ${className}`} aria-hidden />;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={message}
      className={`animate-fade-in rounded-2xl border border-violet-500/20 bg-violet-500/10 px-4 py-3 backdrop-blur-sm ${className}`}
    >
      <div className={`flex items-center gap-3 ${showProgressBar ? "mb-2" : ""}`}>
        <span className="proposal-spinner" aria-hidden />
        <p className="text-sm font-medium text-white">{message}</p>
      </div>
      {showProgressBar && (
        <div className="proposal-loading-bar w-full" aria-hidden />
      )}
    </div>
  );
}

export default LoadingState;
