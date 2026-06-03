import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-page text-heading">
      <Header />
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <Hero />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
