export interface CalendarDay {
  dayNumber: number;
  dayName: string;
  appointments: CalendarAppointment[];
}

export interface CalendarAppointment {
  time: string;
  title?: string;
}

export const calendarMonth = "October 2021";

export const calendarDays: CalendarDay[] = [
  {
    dayNumber: 25,
    dayName: "Mon",
    appointments: [{ time: "10:00" }, { time: "11:00" }, { time: "12:00" }],
  },
  {
    dayNumber: 26,
    dayName: "Tues",
    appointments: [{ time: "08:00" }, { time: "09:00" }, { time: "10:00" }],
  },
  {
    dayNumber: 27,
    dayName: "Wed",
    appointments: [{ time: "12:00" }, { time: "——" }, { time: "13:00" }],
  },
  {
    dayNumber: 28,
    dayName: "Thurs",
    appointments: [{ time: "10:00" }, { time: "11:00" }, { time: "——" }],
  },
  {
    dayNumber: 29,
    dayName: "Fri",
    appointments: [{ time: "——" }, { time: "14:00" }, { time: "16:00" }],
  },
  {
    dayNumber: 30,
    dayName: "Sat",
    appointments: [{ time: "12:00" }, { time: "14:00" }, { time: "15:00" }],
  },
  {
    dayNumber: 31,
    dayName: "Sun",
    appointments: [{ time: "09:00" }, { time: "10:00" }, { time: "11:00" }],
  },
];

export const featuredAppointments = [
  {
    id: "dentist",
    title: "Dentist",
    timeRange: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    icon: "🦷",
  },
  {
    id: "physio",
    title: "Physiotherapy Appointment",
    timeRange: "11:00-12:00",
    doctor: "Dr. Kevin Jones",
    icon: "🏊‍♂️",
  },
];
