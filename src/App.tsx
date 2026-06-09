import { useState } from "react";
import LandingPage from "./components/landing-page/LandingPage";
import Dashboard from "./pages/dashboard";

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <Dashboard />;
  }

  return <LandingPage onGetStarted={() => setShowDashboard(true)} />;
}

export default App;
