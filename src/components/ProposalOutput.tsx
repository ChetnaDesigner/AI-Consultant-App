import type { ReactNode } from "react";
import {
  costItems,
  DEFAULT_PROPOSAL_SUMMARY,
  deploymentItems,
  featureItems,
  riskItems,
  roadmapItems,
  teamItems,
  techStackItems,
  TIME_ESTIMATE,
  TIME_ESTIMATE_CHART,
} from "../constants/proposalData";
import { architectureSteps } from "../utils/buildProposalCopyText";
import {
  AlertIcon,
  ArrowDownIcon,
  CheckCircleIcon,
  ClipboardIcon,
  ClockIcon,
  CloudIcon,
  CurrencyIcon,
  LayersIcon,
  MapIcon,
  SettingsIcon,
  UsersIcon,
} from "./icons";

type ProposalCardProps = {
  icon: ReactNode;
  iconBg: string;
  title: string;
  children: ReactNode;
};

function ProposalCard({ icon, iconBg, title, children }: ProposalCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:p-5 md:p-6">
      <div className="mb-3 flex items-center gap-2.5 sm:mb-4 sm:gap-3">
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sm sm:h-9 sm:w-9 sm:text-base ${iconBg}`}
        >
          {icon}
        </span>
        <h3 className="text-sm font-semibold text-white sm:text-base">
          {title}
        </h3>
      </div>
      <div className="text-xs leading-relaxed text-slate-400 sm:text-sm sm:leading-6">
        {children}
      </div>
    </article>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="mx-auto w-full max-w-xs space-y-1.5 sm:max-w-none sm:space-y-2">
      {architectureSteps.map((step, i) => (
        <div key={step}>
          <div className="rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-center text-xs font-medium break-words text-white sm:px-4 sm:py-3 sm:text-sm">
            {step}
          </div>
          {i < architectureSteps.length - 1 && (
            <div className="flex justify-center py-0.5 text-slate-500 sm:py-1">
              <ArrowDownIcon size={16} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

type ProposalOutputProps = {
  idea?: string;
};

function ProposalOutput({ idea }: ProposalOutputProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
      <ProposalCard
        icon={<ClipboardIcon size={18} />}
        iconBg="bg-violet-500/20 text-violet-400"
        title="Project Summary"
      >
        <p>{idea ?? DEFAULT_PROPOSAL_SUMMARY}</p>
      </ProposalCard>

      <ProposalCard
        icon={<SettingsIcon size={18} />}
        iconBg="bg-blue-500/20 text-blue-400"
        title="Tech Stack"
      >
        <ul className="list-disc space-y-1 pl-5">
          {techStackItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ProposalCard>

      <ProposalCard
        icon={<CheckCircleIcon size={18} />}
        iconBg="bg-emerald-500/20 text-emerald-400"
        title="Features Breakdown"
      >
        <ul className="list-disc space-y-1 pl-5">
          {featureItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ProposalCard>

      <ProposalCard
        icon={<MapIcon size={18} />}
        iconBg="bg-orange-500/20 text-orange-400"
        title="Development Roadmap"
      >
        <ol className="list-decimal space-y-1 pl-5">
          {roadmapItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </ProposalCard>

      <ProposalCard
        icon={<ClockIcon size={18} />}
        iconBg="bg-pink-500/20 text-pink-400"
        title="Time Estimation"
      >
        <p className="text-2xl font-bold text-pink-400 sm:text-3xl">
          {TIME_ESTIMATE}
        </p>
        <div className="mt-3 flex h-12 items-end gap-1.5 sm:h-16 sm:gap-2">
          {TIME_ESTIMATE_CHART.map((h) => (
            <div
              key={h}
              className="w-3 flex-1 rounded-t bg-pink-500/40 sm:w-4 sm:flex-none"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </ProposalCard>

      <ProposalCard
        icon={<UsersIcon size={18} />}
        iconBg="bg-indigo-500/20 text-indigo-400"
        title="Team Recommendation"
      >
        <ul className="list-disc space-y-1 pl-5">
          {teamItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ProposalCard>

      <ProposalCard
        icon={<CurrencyIcon size={18} />}
        iconBg="bg-green-500/20 text-green-400"
        title="Cost Estimation"
      >
        <ul className="space-y-2">
          {costItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ProposalCard>

      <ProposalCard
        icon={<LayersIcon size={18} />}
        iconBg="bg-purple-500/20 text-purple-400"
        title="Architecture Diagram"
      >
        <ArchitectureDiagram />
      </ProposalCard>

      <ProposalCard
        icon={<AlertIcon size={18} />}
        iconBg="bg-red-500/20 text-red-400"
        title="Risks & Challenges"
      >
        <ul className="list-disc space-y-1 pl-5">
          {riskItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ProposalCard>

      <ProposalCard
        icon={<CloudIcon size={18} />}
        iconBg="bg-cyan-500/20 text-cyan-400"
        title="Deployment Plan"
      >
        <ul className="list-disc space-y-1 pl-5">
          {deploymentItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ProposalCard>
    </div>
  );
}

export default ProposalOutput;
