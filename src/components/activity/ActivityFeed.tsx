import React from "react";
import { activityData } from "../../data/appointmentData";

const days = activityData.map((item) => item.day);
const bars = activityData.map((item) => item.values);

const barColors = ["bg-gray-300", "bg-cyan-400", "bg-indigo-600"];

const ActivityFeed = () => {
  return (
    <div className="w-full max-w-xl p-6 rounded-xl bg-primary-ultralight shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold text-primary-dark">Activity</h2>
        <span className="text-xs text-gray-400">
          3 appointments on this week
        </span>
      </div>

      <div className="flex items-end justify-between space-x-3 h-28">
        {bars.map((dayBars, dayIdx) => (
          <div key={dayIdx} className="flex flex-col items-center space-y-1">
            <div className="flex items-end space-x-1 h-24">
              {dayBars.map((height, i) => (
                <div
                  key={i}
                  className={`${barColors[i % barColors.length]} rounded-full`}
                  style={{ width: "4px", height: `${height}px` }}
                />
              ))}
            </div>
            <span className="text-xs text-gray-400 mt-1">{days[dayIdx]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
