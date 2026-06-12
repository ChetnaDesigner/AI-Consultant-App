import IdeaInput from "./IdeaInput";
import {
  BrainIcon,
  ClockIcon,
  DocumentIcon,
  SparklesIcon,
  WrenchIcon,
} from "./icons";

const features = [
  { Icon: SparklesIcon, label: "AI-Powered" },
  { Icon: DocumentIcon, label: "Detailed Proposals" },
  { Icon: ClockIcon, label: "Time & Cost Estimation" },
  { Icon: WrenchIcon, label: "Best Tech Recommendations" },
];

function HeroSection() {
  return (
    <section className="relative mb-10 pt-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-extrabold leading-tight text-heading md:text-5xl">
          AI Software{" "}
          <span className="gradient-text">Development Consultant</span>
        </h1>
        <p className="mt-3 text-base text-body md:text-lg">
          Describe your app idea and get a complete project proposal in seconds.
        </p>
      </div>

      <div className="relative mt-8">
        <IdeaInput />

        <div className="mt-5 flex flex-wrap gap-4">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-2 text-sm text-body"
            >
              <feature.Icon size={16} className="text-indigo-400" />
              <span>{feature.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute top-0 right-0 hidden h-48 w-48 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-cyan-500/20 lg:block xl:h-56 xl:w-56"
        aria-hidden
      >
        <div className="flex h-full items-center justify-center text-indigo-400 opacity-80">
          <BrainIcon size={72} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
