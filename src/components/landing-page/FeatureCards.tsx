const features = [
  {
    title: "Smart Tech Stack",
    description: "Tailored framework choices",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path
          d="M7 10.5L9 12.5L13.5 8"
          stroke="#22D3EE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconBg: "bg-cyan-500/10",
  },
  {
    title: "Effort & Cost Estimation",
    description: "Precise timeline & budget tiers",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="4" y="5" width="12" height="2" rx="1" fill="#A855F7" />
        <rect x="4" y="9" width="8" height="2" rx="1" fill="#A855F7" />
        <rect x="4" y="13" width="10" height="2" rx="1" fill="#A855F7" />
      </svg>
    ),
    iconBg: "bg-purple-500/10",
  },
  {
    title: "Visual Architecture",
    description: "Interactive system diagrams",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="7" stroke="#F472B6" strokeWidth="2" />
        <path
          d="M10 6V10L13 12"
          stroke="#F472B6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconBg: "bg-pink-500/10",
  },
];

const staggerClasses = ["stagger-6", "stagger-7", "stagger-8"] as const;

function FeatureCards() {
  return (
    <section
      id="features"
      className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
    >
      {features.map((feature, index) => (
        <div
          key={feature.title}
          className={`landing-feature-card animate-landing-blur-in ${staggerClasses[index]} rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:p-5`}
        >
          <div
            className={`landing-feature-icon mb-3 flex h-9 w-9 items-center justify-center rounded-lg sm:mb-4 sm:h-10 sm:w-10 ${feature.iconBg}`}
          >
            {feature.icon}
          </div>
          <h3 className="text-sm font-semibold text-white sm:text-base">
            {feature.title}
          </h3>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
}

export default FeatureCards;
