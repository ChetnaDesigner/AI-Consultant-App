import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type SidebarContextValue = {
  collapsed: boolean;
  isSmallScreen: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextValue | null>(null);

const SMALL_SCREEN_QUERY = "(max-width: 1023px)";

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(SMALL_SCREEN_QUERY);

    const updateScreen = () => {
      const small = media.matches;
      setIsSmallScreen(small);
      if (small) setCollapsed(true);
    };

    updateScreen();
    media.addEventListener("change", updateScreen);
    return () => media.removeEventListener("change", updateScreen);
  }, []);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <SidebarContext.Provider
      value={{ collapsed, isSmallScreen, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return context;
}
