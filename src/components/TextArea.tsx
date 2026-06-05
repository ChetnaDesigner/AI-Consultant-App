import { useState } from "react";

const Textarea = () => {
  const [idea, setIdea] = useState("");

  const handleGenerate = () => {
    console.log("User idea:", idea);
  };

  return (
    <div className="mx-auto w-full">
      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        maxLength={2000}
        placeholder="Example: I want to build a food delivery app where users can order food, make payments, and track deliveries..."
        className="min-h-[180px] max-h-[480px] w-full resize-y rounded-2xl border border-input-border bg-input px-5 py-4 text-base text-heading placeholder:text-muted shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
      />
      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          {idea.length} / 2000 characters
        </p>
        <button
          type="button"
          onClick={handleGenerate}
          className="shrink-0 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700 sm:w-auto"
        >
          Generate Proposal
        </button>
      </div>
    </div>
  );
};

export default Textarea;
