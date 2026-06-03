import { useState } from "react";

const Textarea = () => {
  const [idea, setIdea] = useState("");

  const handleGenerate = () => {
    console.log("User idea:", idea);
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4">
      <label className="mb-2 block text-sm font-medium text-body">
        Describe your app idea
      </label>

      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Example: I want to build a food delivery app where users can order food, make payments, and track deliveries..."
        className="min-h-[180px] w-full resize-none rounded-2xl border border-input-border bg-input px-5 py-4 text-base text-heading placeholder:text-muted shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
      />

      <button
        type="button"
        onClick={handleGenerate}
        className="mt-4 w-full rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
      >
        Generate Proposal
      </button>
    </div>
  );
};

export default Textarea;
