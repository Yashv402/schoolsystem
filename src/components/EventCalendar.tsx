"use client";

import { time } from "console";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// Dummy data
const events = [
  {
    id: 1,
    title: "Event 1",
    time: "10:00 AM",
    description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    title: "Event 2",
    time: "1:00 PM",
    description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    title: "Event 3",
    time: "3:00 PM",
    description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-xl">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4 h-[350px] overflow-y-scroll overflow-x-hidden scrollbar">
        {events.map((event) => (
          <div key={event.id} className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold ">{event.title}</h1>
              <p className="font-semibold text-gray-400">{event.time}</p>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
