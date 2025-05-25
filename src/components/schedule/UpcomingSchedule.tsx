import React from "react";
import {
  thursdayAppointments,
  saturdayAppointments,
} from "../../data/appointmentData";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

const UpcomingSchedule: React.FC = () => {
  return (
    <div className="mx-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">The Upcoming Schedule</h2>
      </div>

      <div className="mb-6">
        <h3 className="text-sm text-gray-500 mb-3">On Thursday</h3>
        <div className="flex flex-col xs:flex-row gap-4">
          {thursdayAppointments.map((appointment) => (
            <SimpleAppointmentCard
              key={appointment.id}
              title={appointment.title}
              time={appointment.time}
              timeType={appointment.timeType}
              type={appointment.type}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm text-gray-500 mb-3 -mt-4">On Saturday</h3>
        <div className="flex flex-col xs:flex-row gap-4">
          {saturdayAppointments.map((appointment) => (
            <SimpleAppointmentCard
              key={appointment.id}
              title={appointment.title}
              time={appointment.time}
              timeType={appointment.timeType}
              type={appointment.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
