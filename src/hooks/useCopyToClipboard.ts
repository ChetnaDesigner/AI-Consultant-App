import { useEffect, useRef, useState } from "react";
import { COPY_RESET_MS } from "../constants/copyButton";
import { copyToClipboard } from "../utils/copyToClipboard";

export type CopyStatus = "idle" | "success" | "error";

export function useCopyToClipboard(resetMs = COPY_RESET_MS) {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const [isCopying, setIsCopying] = useState(false);
  const resetTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current !== null) {
        window.clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  const copy = async (text: string) => {
    if (isCopying) return;

    setIsCopying(true);

    try {
      await copyToClipboard(text);
      setCopyStatus("success");
    } catch {
      setCopyStatus("error");
    } finally {
      setIsCopying(false);
    }

    if (resetTimeoutRef.current !== null) {
      window.clearTimeout(resetTimeoutRef.current);
    }

    resetTimeoutRef.current = window.setTimeout(() => {
      setCopyStatus("idle");
      resetTimeoutRef.current = null;
    }, resetMs);
  };

  return { copyStatus, isCopying, copy };
}
