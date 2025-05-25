import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MobileHeader from "./components/MobileHeader";
import DashboardMainContent from "./components/DashboardMainContent";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="hidden lg:block">
        <Header />
      </div>
      <MobileHeader
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div className="flex flex-1">
        <Sidebar />

        <DashboardMainContent isMobileMenuOpen={isMobileMenuOpen} />
      </div>
    </div>
  );
}

export default App;
