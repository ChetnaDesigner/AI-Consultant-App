import CopyButton from "./CopyButton";
import ProposalOutput from "./ProposalOutput";
import { PROPOSAL_ACTION_BUTTONS } from "../constants/proposalData";
import { SparklesIcon } from "./icons";
import { buildProposalCopyText } from "../utils/buildProposalCopyText";

type GeneratedProposalProps = {
  idea?: string;
};

function GeneratedProposal({ idea }: GeneratedProposalProps) {
  const proposalText = buildProposalCopyText(idea);

  return (
    <section className="mt-8 pb-6 sm:mt-10 sm:pb-8">
      <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="flex items-center gap-2">
          <SparklesIcon className="text-violet-300" size={22} />
          <h2 className="text-lg font-bold text-white sm:text-xl">
            Generated Proposal
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <CopyButton text={proposalText} />
          {PROPOSAL_ACTION_BUTTONS.map((label) => (
            <button
              key={label}
              type="button"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white sm:px-6 sm:py-2.5 sm:text-sm"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <ProposalOutput idea={idea} />

      <div className="mt-6 flex flex-col items-end gap-3 sm:mt-8">
        <CopyButton
          text={proposalText}
          showStatusBanner
          successLabel="Copied to Clipboard"
          className="landing-cta-btn flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white"
          iconSize={18}
        />
      </div>
    </section>
  );
}

export default GeneratedProposal;
