import {
  architectureSteps,
  costItems,
  DEFAULT_PROPOSAL_SUMMARY,
  deploymentItems,
  featureItems,
  riskItems,
  roadmapItems,
  teamItems,
  techStackItems,
  TIME_ESTIMATE,
} from "../constants/proposalData";

export { DEFAULT_PROPOSAL_SUMMARY, architectureSteps };

export function buildProposalCopyText(idea?: string): string {
  const summary = idea ?? DEFAULT_PROPOSAL_SUMMARY;

  return [
    "Generated Proposal",
    "",
    "Project Summary",
    summary,
    "",
    "Tech Stack",
    ...techStackItems.map((item) => `- ${item}`),
    "",
    "Features Breakdown",
    ...featureItems.map((item) => `- ${item}`),
    "",
    "Development Roadmap",
    ...roadmapItems.map((item, index) => `${index + 1}. ${item}`),
    "",
    "Time Estimation",
    TIME_ESTIMATE,
    "",
    "Team Recommendation",
    ...teamItems.map((item) => `- ${item}`),
    "",
    "Cost Estimation",
    ...costItems.map((item) => `- ${item}`),
    "",
    "Architecture Diagram",
    ...architectureSteps.flatMap((step, i) =>
      i < architectureSteps.length - 1 ? [step, "↓"] : [step],
    ),
    "",
    "Risks & Challenges",
    ...riskItems.map((item) => `- ${item}`),
    "",
    "Deployment Plan",
    ...deploymentItems.map((item) => `- ${item}`),
  ].join("\n");
}
