import type { ReactNode } from "react";

type ProposalCardProps = {
  icon: string;
  iconBg: string;
  title: string;
  children: ReactNode;
};

function ProposalCard({ icon, iconBg, title, children }: ProposalCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5">
      <div className="mb-4 flex items-center gap-3">
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-xl text-base ${iconBg}`}
        >
          {icon}
        </span>
        <h3 className="font-semibold text-heading">{title}</h3>
      </div>
      <div className="text-sm leading-6 text-body">{children}</div>
    </article>
  );
}

const actionButtons = ["Copy All", "Export PDF", "Regenerate"];

function GeneratedProposal() {
  return (
    <section className="pb-8">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">✨</span>
          <h2 className="text-xl font-bold text-heading">Generated Proposal</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {actionButtons.map((label) => (
            <button
              key={label}
              type="button"
              className="rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium text-heading hover:opacity-80"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ProposalCard icon="📋" iconBg="bg-violet-500/20 text-violet-400" title="Project Summary">
          <p>
            A food delivery platform connecting users with local restaurants for
            ordering, real-time tracking, secure payments, and restaurant menu
            management.
          </p>
        </ProposalCard>

        <ProposalCard icon="⚙" iconBg="bg-blue-500/20 text-blue-400" title="Tech Stack">
          <ul className="list-disc space-y-1 pl-5">
            <li>Frontend: Next.js + TypeScript</li>
            <li>Backend: Node.js + NestJS</li>
            <li>Database: PostgreSQL</li>
            <li>Auth: JWT + OAuth</li>
            <li>Cloud: AWS / Vercel</li>
          </ul>
        </ProposalCard>

        <ProposalCard icon="✅" iconBg="bg-emerald-500/20 text-emerald-400" title="Features Breakdown">
          <ul className="list-disc space-y-1 pl-5">
            <li>User registration & login</li>
            <li>Restaurant listing & search</li>
            <li>Cart & checkout</li>
            <li>Live order tracking</li>
            <li>Admin dashboard</li>
          </ul>
        </ProposalCard>

        <ProposalCard icon="🗺" iconBg="bg-orange-500/20 text-orange-400" title="Development Roadmap">
          <ol className="list-decimal space-y-1 pl-5">
            <li>Phase 1: Planning & Design</li>
            <li>Phase 2: Backend APIs</li>
            <li>Phase 3: Frontend Development</li>
            <li>Phase 4: Testing & QA</li>
            <li>Phase 5: Deployment</li>
          </ol>
        </ProposalCard>

        <ProposalCard icon="⏱" iconBg="bg-pink-500/20 text-pink-400" title="Time Estimation">
          <p className="text-3xl font-bold text-pink-400">12 Weeks</p>
          <div className="mt-3 flex h-16 items-end gap-2">
            {[40, 65, 50, 80, 55, 70].map((h, i) => (
              <div
                key={i}
                className="w-4 rounded-t bg-pink-500/40"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </ProposalCard>

        <ProposalCard icon="👥" iconBg="bg-indigo-500/20 text-indigo-400" title="Team Recommendation">
          <ul className="list-disc space-y-1 pl-5">
            <li>UI/UX Designer</li>
            <li>React Developer</li>
            <li>Backend Developer</li>
            <li>QA Engineer</li>
            <li>Project Manager</li>
          </ul>
        </ProposalCard>

        <ProposalCard icon="💰" iconBg="bg-green-500/20 text-green-400" title="Cost Estimation">
          <ul className="space-y-2">
            <li>Basic Scale: ₹8L – ₹12L</li>
            <li>Medium Scale: ₹15L – ₹25L</li>
            <li>Enterprise: ₹30L+</li>
          </ul>
        </ProposalCard>

        <ProposalCard icon="🏗" iconBg="bg-purple-500/20 text-purple-400" title="Architecture Diagram">
          <div className="space-y-2 text-center">
            {["User", "Frontend (Next.js)", "Backend (NestJS)", "PostgreSQL", "Cloud Hosting"].map(
              (step, i, arr) => (
                <div key={step}>
                  <div className="rounded-lg border border-border bg-surface px-3 py-2">
                    {step}
                  </div>
                  {i < arr.length - 1 && <p className="py-1 text-muted">↓</p>}
                </div>
              ),
            )}
          </div>
        </ProposalCard>

        <ProposalCard icon="⚠" iconBg="bg-red-500/20 text-red-400" title="Risks & Challenges">
          <ul className="list-disc space-y-1 pl-5">
            <li>Payment gateway integration</li>
            <li>Real-time delivery tracking</li>
            <li>Scalability during peak hours</li>
            <li>Data security & privacy</li>
          </ul>
        </ProposalCard>

        <ProposalCard icon="☁" iconBg="bg-cyan-500/20 text-cyan-400" title="Deployment Plan">
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
