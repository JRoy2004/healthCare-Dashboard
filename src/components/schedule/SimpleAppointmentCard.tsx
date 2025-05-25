import React from "react";

interface AppointmentCardProps {
  title: string;
  time: string;
  timeType: "AM" | "PM";
  type?:
    | "cardiologist"
    | "dentist"
    | "neurologist"
    | "ophthalmologist"
    | "checkup";
}

const SimpleAppointmentCard: React.FC<AppointmentCardProps> = ({
  title,
  time,
  timeType,
  type,
}) => {
  const getIcon = () => {
    switch (type) {
      case "cardiologist":
        return "❤️";
      case "dentist":
        return "🦷";
      case "neurologist":
        return "🧠";
      case "ophthalmologist":
        return "👁️";
      case "checkup":
        return "🩺";
      default:
        return "📅";
    }
  };

  return (
    <div className={`rounded-3xl p-4 mb-2 bg-primary-light animate-on-hover`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium break-words">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">
            {time} {timeType}
          </p>
        </div>
        <span className="text-2xl ml-6 -mt-2 ">{getIcon()}</span>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
