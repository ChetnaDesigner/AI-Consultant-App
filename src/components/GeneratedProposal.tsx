import type { ReactNode } from "react";

type ProposalCardProps = {
  icon: string;
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

const architectureSteps = [
  "User",
  "Frontend (Next.js)",
  "Backend (NestJS)",
  "PostgreSQL",
  "Cloud Hosting",
];

function ArchitectureDiagram() {
  return (
    <div className="mx-auto w-full max-w-xs space-y-1.5 sm:max-w-none sm:space-y-2">
      {architectureSteps.map((step, i) => (
        <div key={step}>
          <div className="rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-center text-xs font-medium break-words text-white sm:px-4 sm:py-3 sm:text-sm">
            {step}
          </div>
          {i < architectureSteps.length - 1 && (
            <p className="py-0.5 text-center text-xs text-slate-500 sm:py-1 sm:text-sm">
              ↓
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

const actionButtons = ["Copy All", "Export PDF", "Regenerate"];

type GeneratedProposalProps = {
  idea?: string;
};

function GeneratedProposal({ idea }: GeneratedProposalProps) {
  return (
    <section className="mt-8 pb-6 sm:mt-10 sm:pb-8">
      <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl">✨</span>
          <h2 className="text-lg font-bold text-white sm:text-xl">
            Generated Proposal
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {actionButtons.map((label) => (
            <button
              key={label}
              type="button"
              className="landing-cta-btn rounded-xl px-4 py-2 text-xs font-semibold text-white cursor-pointer sm:px-6 sm:py-2.5 sm:text-sm"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
        <ProposalCard
          icon="📋"
          iconBg="bg-violet-500/20 text-violet-400"
          title="Project Summary"
        >
          <p>
            {idea ??
              "A food delivery platform connecting users with local restaurants for ordering, real-time tracking, secure payments, and restaurant menu management."}
          </p>
        </ProposalCard>

        <ProposalCard
          icon="⚙"
          iconBg="bg-blue-500/20 text-blue-400"
          title="Tech Stack"
        >
          <ul className="list-disc space-y-1 pl-5">
            <li>Frontend: Next.js + TypeScript</li>
            <li>Backend: Node.js + NestJS</li>
            <li>Database: PostgreSQL</li>
            <li>Auth: JWT + OAuth</li>
            <li>Cloud: AWS / Vercel</li>
          </ul>
        </ProposalCard>

        <ProposalCard
          icon="✅"
          iconBg="bg-emerald-500/20 text-emerald-400"
          title="Features Breakdown"
        >
          <ul className="list-disc space-y-1 pl-5">
            <li>User Registration & Login</li>
            <li>Restaurant Listing & Search</li>
            <li>Cart & Checkout</li>
            <li>Live Order Tracking</li>
            <li>Admin Dashboard</li>
          </ul>
        </ProposalCard>

        <ProposalCard
          icon="🗺"
          iconBg="bg-orange-500/20 text-orange-400"
          title="Development Roadmap"
        >
          <ol className="list-decimal space-y-1 pl-5">
            <li>Phase 1: Planning & Design</li>
            <li>Phase 2: Backend APIs</li>
            <li>Phase 3: Frontend Development</li>
            <li>Phase 4: Testing & QA</li>
            <li>Phase 5: Deployment</li>
          </ol>
        </ProposalCard>

        <ProposalCard
          icon="⏱"
          iconBg="bg-pink-500/20 text-pink-400"
          title="Time Estimation"
        >
          <p className="text-2xl font-bold text-pink-400 sm:text-3xl">12 Weeks</p>
          <div className="mt-3 flex h-12 items-end gap-1.5 sm:h-16 sm:gap-2">
            {[40, 65, 50, 80, 55, 70].map((h) => (
              <div
                key={h}
                className="w-3 flex-1 rounded-t bg-pink-500/40 sm:w-4 sm:flex-none"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </ProposalCard>

        <ProposalCard
          icon="👥"
          iconBg="bg-indigo-500/20 text-indigo-400"
          title="Team Recommendation"
        >
          <ul className="list-disc space-y-1 pl-5">
            <li>UI/UX Designer</li>
            <li>React Developer</li>
            <li>Backend Developer</li>
            <li>QA Engineer</li>
            <li>Project Manager</li>
          </ul>
        </ProposalCard>

        <ProposalCard
          icon="💰"
          iconBg="bg-green-500/20 text-green-400"
          title="Cost Estimation"
        >
          <ul className="space-y-2">
            <li>Basic Scale: ₹8L – ₹12L</li>
            <li>Medium Scale: ₹15L – ₹25L</li>
            <li>Enterprise: ₹30L+</li>
          </ul>
        </ProposalCard>

        <ProposalCard
          icon="🏗"
          iconBg="bg-purple-500/20 text-purple-400"
          title="Architecture Diagram"
        >
          <ArchitectureDiagram />
        </ProposalCard>

        <ProposalCard
          icon="⚠"
          iconBg="bg-red-500/20 text-red-400"
          title="Risks & Challenges"
        >
          <ul className="list-disc space-y-1 pl-5">
            <li>Payment Gateway Integration</li>
            <li>Real-Time Delivery Tracking</li>
            <li>Scalability During Peak Hours</li>
            <li>Data Security & Privacy</li>
          </ul>
        </ProposalCard>

        <ProposalCard
          icon="☁"
          iconBg="bg-cyan-500/20 text-cyan-400"
          title="Deployment Plan"
        >
          <ul className="list-disc space-y-1 pl-5">
            <li>Frontend: Vercel</li>
            <li>Backend: AWS EC2 / ECS</li>
            <li>Database: AWS RDS</li>
            <li>CI/CD: GitHub Actions</li>
            <li>Monitoring: Datadog</li>
          </ul>
        </ProposalCard>
      </div>
    </section>
  );
}

export default GeneratedProposal;
