import AnatomySection from "./anatomical/AnatomySection";
import CalendarView from "./calendar/CalendarView";
import UpcomingSchedule from "./schedule/UpcomingSchedule";
import ActivityFeed from "./activity/ActivityFeed";
import { ChevronDown } from "lucide-react";

function DashboardMainContent({
  isMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
}) {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className={`${isMobileMenuOpen ? "hidden" : "block"}`}>
        <div className="flex md:flex-row flex-col">
          <div className="flex flex-1 flex-col bg-white pl-5 md:max-w-[50%]">
            <div className="flex flex-row flex-1 justify-between items-center pb-6">
              <h1 className="text-xl text-primary-dark font-semibold ">
                Dashboard
              </h1>
              <p className="flex flex-row text-primary-dark text-xs mr-8">
                This Week{" "}
                <ChevronDown
                  strokeWidth={3}
                  color="rgba(47,50,156,255)"
                  size={15}
                />
              </p>
            </div>
            <AnatomySection />
            <div className="mr-8 mt-4">
              <ActivityFeed />
            </div>
          </div>

          <div className="flex flex-1 flex-col bg-primary-ultralight md:max-w-[50%]">
            <CalendarView />
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardMainContent;
