import React from "react";

interface HealthStatusCardProps {
  id: string;
  name: string;
  status: "good" | "warning" | "bad";
  date: string;
}

const HealthStatusCard: React.FC<HealthStatusCardProps> = ({
  id,
  name,
  status,
  date,
}) => {
  const getStatusIcon = () => {
    switch (id) {
      case "lungs":
        return "🫁";
      case "teeth":
        return "🦷";
      case "bone":
        return "🦴";
      default:
        return "❓";
    }
  };

  return (
    <div className="rounded-3xl bg-primary-ultralight p-4 flex-1 flex-shrink-2 mr-8 min-w-36">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xl">{getStatusIcon()}</span>
        <h3 className="font-medium">{name}</h3>
      </div>

      <p className="text-xs text-gray-500 mb-2">{date}</p>

      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${
            status === "good"
              ? "bg-green-400"
              : status === "bad"
              ? "bg-red-500"
              : "bg-yellow-400"
          }`}
          style={{
            width:
              status === "good" ? "80%" : status === "warning" ? "50%" : "20%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HealthStatusCard;
