import {
  COPY_COPYING_LABEL,
  COPY_DEFAULT_LABEL,
  COPY_ERROR_MESSAGE,
  COPY_SUCCESS_LABEL,
  COPY_SUCCESS_MESSAGE,
} from "../constants/copyButton";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
import { CheckCircleIcon, ClipboardIcon } from "./icons";

type CopyButtonProps = {
  text: string;
  label?: string;
  successLabel?: string;
  copyingLabel?: string;
  successMessage?: string;
  errorMessage?: string;
  showStatusBanner?: boolean;
  className?: string;
  iconSize?: number;
};

function CopyButton({
  text,
  label = COPY_DEFAULT_LABEL,
  successLabel = COPY_SUCCESS_LABEL,
  copyingLabel = COPY_COPYING_LABEL,
  successMessage = COPY_SUCCESS_MESSAGE,
  errorMessage = COPY_ERROR_MESSAGE,
  showStatusBanner = false,
  className = "landing-cta-btn flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold text-white sm:px-6 sm:py-2.5 sm:text-sm",
  iconSize = 16,
}: CopyButtonProps) {
  const { copyStatus, isCopying, copy } = useCopyToClipboard();

  return (
    <div className={showStatusBanner ? "space-y-3" : undefined}>
      <button
        type="button"
        onClick={() => copy(text)}
        disabled={isCopying}
        aria-label={
          copyStatus === "success"
            ? "Content copied to clipboard"
            : "Copy content to clipboard"
        }
        className={`${className} ${
          isCopying ? "cursor-wait opacity-80" : "cursor-pointer"
        }`}
      >
        {copyStatus === "success" ? (
          <>
            <CheckCircleIcon size={iconSize} />
            {successLabel}
          </>
        ) : (
          <>
            <ClipboardIcon size={iconSize} />
            {isCopying ? copyingLabel : label}
          </>
        )}
      </button>

      {showStatusBanner && copyStatus === "success" && (
        <p
          role="status"
          aria-live="polite"
          className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2.5 text-sm text-emerald-300"
        >
          {successMessage}
        </p>
      )}

      {showStatusBanner && copyStatus === "error" && (
        <p
          role="alert"
          className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm text-red-300"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export default CopyButton;
