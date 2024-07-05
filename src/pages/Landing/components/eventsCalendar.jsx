import "react-tabs-carousel/css/index.css";
import { useState } from "react";
import { events } from "../../../../dataPlaceholder";
import EventCard from "../../../components/eventCard";
import { AnimatePresence, motion } from "framer-motion";

const months = [
  { name: "All", value: 0 },
  { name: "January", value: 1 },
  { name: "February", value: 2 },
  { name: "March", value: 3 },
  { name: "April", value: 4 },
  { name: "May", value: 5 },
  { name: "June", value: 6 },
  { name: "July", value: 7 },
  { name: "August", value: 8 },
  { name: "September", value: 9 },
  { name: "October", value: 10 },
  { name: "November", value: 11 },
  { name: "December", value: 12 },
];

const EventsCalendar = () => {
  const [selectedButton, setSelectedButton] = useState("All");
  const [data, setData] = useState(events);

  const handleMonthChange = (name) => {
    setSelectedButton(name);
    if (name === "All") {
      setData(events);
    } else {
      const monthIndex = months.find((month) => month.name === name).value;
      const filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getMonth() + 1 === monthIndex;
      });
      setData(filteredEvents);
    }
  };

  return (
    <div className="container mx-auto" id="events">
      <h2 className="text-4xl text-white font-semibold text-center">
        Event Calendar
      </h2>
      <div className="flex gap-2 align-middle justify-between items-center p-4">
        {months.map((month, index) => (
          <button
            onClick={() => handleMonthChange(month.name)}
            key={index}
            className={`p-2 bg-gray-300 text-black rounded-2xl flex-1 border-2 border-teal-300 ${
              month.name === selectedButton ? "bg-yellow-300" : ""
            }`}
          >
            {month.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-8">
        <AnimatePresence>
          {data &&
            data.map((d, ) => (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <EventCard data={d} />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EventsCalendar;
