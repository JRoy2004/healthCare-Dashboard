import React from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import {
  calendarDays,
  calendarMonth,
  featuredAppointments,
} from "../../data/calendarData";
import CalendarDayColumn from "./CalendarDayColumn";
import FeaturedAppointment from "./FeaturedAppointment";

const CalendarView: React.FC = () => {
  return (
    <div className="bg-primary-ultralight  p-4 ">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-md font-semibold">{calendarMonth}</h2>
        </div>

        <div className="flex items-center gap-2 mr-10">
          <button className="p-1 ">
            <ArrowBigLeft
              strokeWidth={3}
              color="rgba(47,50,156,255)"
              size="20"
            />
          </button>
          <button className="p-1 r">
            <ArrowBigRight
              strokeWidth={3}
              color="rgba(47,50,156,255)"
              size="20"
            />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-6">
        {calendarDays.map((day) => (
          <CalendarDayColumn
            key={day.dayNumber}
            dayNumber={day.dayNumber}
            dayName={day.dayName}
            appointments={day.appointments}
          />
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        {featuredAppointments.map((appointment) => (
          <FeaturedAppointment
            key={appointment.id}
            title={appointment.title}
            timeRange={appointment.timeRange}
            doctor={appointment.doctor}
            icon={appointment.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
