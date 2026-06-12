import {
  CheckCircleIcon,
  LayersIcon,
  TemplatesIcon,
} from "../icons";

const features = [
  {
    title: "Smart Tech Stack",
    description: "Tailored framework choices",
    Icon: CheckCircleIcon,
    iconClassName: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
  },
  {
    title: "Effort & Cost Estimation",
    description: "Precise timeline & budget tiers",
    Icon: TemplatesIcon,
    iconClassName: "text-purple-400",
    iconBg: "bg-purple-500/10",
  },
  {
    title: "Visual Architecture",
    description: "Interactive system diagrams",
    Icon: LayersIcon,
    iconClassName: "text-pink-400",
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
            <feature.Icon size={18} className={feature.iconClassName} />
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
