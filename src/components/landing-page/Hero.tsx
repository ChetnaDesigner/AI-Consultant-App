type HeroProps = {
  onGetStarted?: () => void;
};

function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
      <h1 className="text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
        <span className="animate-landing-blur-in stagger-2 inline-block">
          Turn Your App Ideas Into
        </span>
        <br />
        <span className="landing-gradient-text animate-landing-blur-in stagger-3 inline-block">
          Production-Ready Blueprints
        </span>
      </h1>

      <p className="animate-landing-blur-in stagger-4 mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
        Instantly generate technical recommendations, architectures, timeline
        breakdowns, and cost estimates.
      </p>

      <button
        type="button"
        onClick={onGetStarted}
        className="landing-cta-btn animate-landing-blur-in stagger-5 mt-10 rounded-xl px-8 py-3.5 text-sm font-semibold text-white cursor-pointer"
      >
        Get Started Free →
      </button>
    </section>
  );
}

export default Hero;
