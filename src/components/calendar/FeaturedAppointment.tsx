import React from "react";

interface FeaturedAppointmentProps {
  title: string;
  timeRange: string;
  doctor: string;
  icon: string;
}

const FeaturedAppointment: React.FC<FeaturedAppointmentProps> = ({
  title,
  timeRange,
  doctor,
  icon,
}) => {
  const isDentist = title.toLowerCase().includes("dentist");

  return (
    <div
      className={`rounded-xl p-2 -mt-4 ${
        isDentist
          ? "bg-primary-dark text-white"
          : "bg-primary-light text-primary-dark"
      }`}
    >
      <div className="flex justify-between items-start">
        <div className="problem flex flex-col justify-start items-start w-fit">
          <h3
            className={`font-medium text-md w-fit ${
              isDentist ? "text-white " : "text-primary-dark font-semibold"
            }`}
          >
            {title}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span
              className={`text-sm ${
                isDentist ? "text-primary-light" : "text-gray-600"
              }`}
            >
              {timeRange}
            </span>
          </div>
          <p
            className={`text-sm mt-2 break-words ${
              isDentist ? "text-primary-light" : "text-gray-600"
            }`}
          >
            {doctor}
          </p>
        </div>
        <span className="text-2xl -mt-2">{icon}</span>
      </div>
    </div>
  );
};

export default FeaturedAppointment;
