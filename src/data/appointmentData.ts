export interface Appointment {
  id: string;
  title: string;
  time: string;
  timeType: "AM" | "PM";
  icon: string;
  type?:
    | "cardiologist"
    | "dentist"
    | "neurologist"
    | "ophthalmologist"
    | "checkup";
}

export const thursdayAppointments: Appointment[] = [
  {
    id: "thu-1",
    title: "Health checkup complete",
    time: "11:00",
    timeType: "AM",
    icon: "🩺",
    type: "checkup",
  },
  {
    id: "thu-2",
    title: "Ophthalmologist",
    time: "14:00",
    timeType: "PM",
    icon: "👁️",
    type: "ophthalmologist",
  },
];

export const saturdayAppointments: Appointment[] = [
  {
    id: "sat-1",
    title: "Cardiologist",
    time: "12:00",
    timeType: "AM",
    icon: "❤️",
    type: "cardiologist",
  },
  {
    id: "sat-2",
    title: "Neurologist",
    time: "16:00",
    timeType: "PM",
    icon: "🧠",
    type: "neurologist",
  },
];

export const activityData = [
  { day: "Mon", values: [35, 80, 75] },
  { day: "Tues", values: [25, 40, 65, 30] },
  { day: "Wed", values: [45, 80] },
  { day: "Thurs", values: [15, 55, 85] },
  { day: "Fri", values: [70, 55, 95] },
  { day: "Sat", values: [40, 80, 65] },
  { day: "Sun", values: [15, 90, 60, 20] },
];
