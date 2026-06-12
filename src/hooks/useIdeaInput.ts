import { useState, type ChangeEvent } from "react";
import { submitProposal } from "../utils/submitProposal";
import { validateIdea } from "../utils/validateIdea";

type UseIdeaInputOptions = {
  onSuccess?: (idea: string) => void;
};

export function useIdeaInput({ onSuccess }: UseIdeaInputOptions = {}) {
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
      await submitProposal(capturedIdea);
      onSuccess?.(capturedIdea);
      setHasGenerated(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    appIdea,
    error,
    isLoading,
    hasGenerated,
    handleIdeaChange,
    handleGenerate,
  };
}
