import { SidebarProvider } from "./context/sidebarcontext";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import IdeaInput from "./components/ideainput";

function App() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-page text-heading">
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <Header />

          <main className="animate-fade-in-up stagger-1 flex-1 px-4 py-6 md:px-8">
            <IdeaInput />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
