import { buildProposalCopyText } from "./buildProposalCopyText";

export function generateProposal(idea: string): string {
  return buildProposalCopyText(idea);
}
