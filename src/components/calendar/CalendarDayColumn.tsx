import React from "react";
import { CalendarAppointment } from "../../data/calendarData";

interface CalendarDayColumnProps {
  dayName: string;
  dayNumber: number;
  appointments: CalendarAppointment[];
}

const CalendarDayColumn: React.FC<CalendarDayColumnProps> = ({
  dayName,
  dayNumber,
  appointments,
}) => {
  const isToday = dayNumber === 26; // For example, setting day 27 as "today"
  const invalid = dayNumber === 31;

  return (
    <div
      className={`calendar-day ${
        isToday ? "bg-primary-light/50 pr-2 rounded-lg" : ""
      } `}
    >
      <p
        className={` text-sm ${
          invalid ? "text-primary-lowmedium lg:-ml-9" : "text-primary-dark"
        }`}
      >
        {dayName}
      </p>
      <p
        className={`text-lg font-semibold my-1 text-primary-dark  ${
          invalid ? "text-primary-lowmedium lg:-ml-9" : ""
        }`}
      >
        {dayNumber}
      </p>

      <div className="flex flex-col gap-1 mt-2">
        {appointments.map((appointment, index) => {
          let isSp;
          if (
            (appointment.time === "11:00" && dayName === "Thurs") ||
            (appointment.time === "12:00" && dayName === "Sat") ||
            (appointment.time === "09:00" && dayName === "Sun")
          )
            isSp = true;

          return (
            <div
              key={`${dayNumber}-${appointment.time}-${index}`}
              className={`calendar-time ${
                invalid ? "text-primary-lowmedium" : ""
              } ${
                isToday && appointment.time === "09:00"
                  ? "bg-primary-dark text-primary-light py-1 px-1 rounded-xl"
                  : ""
              } ${isSp ? "sp-time text-white px-3 py-1 rounded-xl" : ""} ${
                dayName === "Sat" ? "pr-10 -mr-8" : ""
              }
              } ${isSp ? "sp-time text-white" : ""} ${
                dayName === "Sun" ? "pl-2 -ml-2" : ""
              }`}
            >
              {appointment.time}
              {isSp && (
                <div className="w-1 h-1 rounded-full bg-white relative left-3 bottom-[1px]" />
              )}
            </div>
          );
        })}
        {appointments.length === 0 && (
          <div className="h-6 flex items-center justify-center">
            <span className="text-gray-400 text-xl">—</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarDayColumn;
