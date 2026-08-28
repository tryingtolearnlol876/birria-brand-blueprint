// SCHEDULE CONTENT — edit this file to update pop-ups, locations and events.
// All entries below are placeholders until confirmed.

export type PopUp = {
  date: string;
  time: string;
  place: string;
  address: string;
  notes?: string;
  mapUrl?: string;
};

export const scheduleNote =
  "Schedule placeholder — dates, times and locations change. Update src/content/schedule.ts before publishing.";

export const upcoming: PopUp[] = [
  {
    date: "Date TBD",
    time: "Time TBD",
    place: "El Sereno Pop-Up",
    address: "Location to be confirmed — El Sereno, Los Angeles",
    notes: "Weekly pop-up. Confirm with the client.",
  },
  {
    date: "Date TBD",
    time: "Time TBD",
    place: "Location TBD",
    address: "Address to be confirmed",
  },
  {
    date: "Date TBD",
    time: "Time TBD",
    place: "Location TBD",
    address: "Address to be confirmed",
  },
];

export const collaborations: PopUp[] = [
  {
    date: "Date TBD",
    time: "Time TBD",
    place: "Collaboration TBD",
    address: "Host / venue to be confirmed",
    notes: "Guest chef or brand collaboration.",
  },
];
