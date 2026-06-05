import { SidebarProvider } from "./context/SidebarContext";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import IdeaInput from "./components/IdeaInput";

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
