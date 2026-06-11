import { useEffect, useState } from "react";
import { SidebarProvider } from "../context/SidebarContext";
import { useTheme } from "../context/ThemeContext";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import IdeaInput from "../components/IdeaInput";
import RightSection from "../components/RightSection";
import GeneratedProposal from "../components/GeneratedProposal";

function Dashboard() {
  const { setTheme } = useTheme();
  const [submittedIdea, setSubmittedIdea] = useState<string | null>(null);

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <SidebarProvider>
      <div className="landing-bg dashboard-shell dark flex min-h-screen text-white">
        <div className="landing-orb landing-orb-1" aria-hidden />
        <div className="landing-orb landing-orb-2" aria-hidden />
        <div className="landing-orb landing-orb-3" aria-hidden />

        <div className="relative z-10 flex min-h-screen w-full">
          <Sidebar />

          <div className="flex min-w-0 flex-1 flex-col">
            <Header />

            <main className="animate-fade-in-up stagger-1 flex-1 space-y-6 px-4 py-5 sm:space-y-8 sm:px-6 sm:py-6 md:px-8">
              <RightSection />
              <IdeaInput onSuccess={setSubmittedIdea} />
              {submittedIdea && <GeneratedProposal idea={submittedIdea} />}
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default Dashboard;
