import { useCallback, useState } from "react";

export type AppView = "landing" | "dashboard";

export function useAppNavigation(initialView: AppView = "landing") {
  const [view, setView] = useState<AppView>(initialView);

  const showDashboard = useCallback(() => setView("dashboard"), []);
  const showLanding = useCallback(() => setView("landing"), []);

  return {
    view,
    showDashboard,
    showLanding,
    isLanding: view === "landing",
    isDashboard: view === "dashboard",
  };
}
