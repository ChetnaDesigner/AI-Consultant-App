import Dashboard from "../pages/dashboard";
import { useAppNavigation } from "../hooks/useAppNavigation";
import LandingPage from "./landing-page/LandingPage";

function AppRouter() {
  const { isDashboard, showDashboard } = useAppNavigation();

  if (isDashboard) {
    return <Dashboard />;
  }

  return <LandingPage onGetStarted={showDashboard} />;
}

export default AppRouter;
