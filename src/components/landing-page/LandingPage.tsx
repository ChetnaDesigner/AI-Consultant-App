import Navbar from "./Navbar";
import Hero from "./Hero";
import FeatureCards from "./FeatureCards";

type LandingPageProps = {
  onGetStarted?: () => void;
};

function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="landing-bg min-h-screen text-white">
      <div className="landing-orb landing-orb-1" aria-hidden />
      <div className="landing-orb landing-orb-2" aria-hidden />
      <div className="landing-orb landing-orb-3" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 sm:py-8">
        <Navbar />

        <div className="flex flex-1 flex-col items-center justify-center gap-16 py-16 sm:py-20">
          <Hero onGetStarted={onGetStarted} />
          <FeatureCards />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
