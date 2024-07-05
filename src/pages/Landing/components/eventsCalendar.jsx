import "react-tabs-carousel/css/index.css";
import { useState } from "react";
import EventCard from "../../../components/eventCard";
import { AnimatePresence, motion } from "framer-motion";
import SearchBar from "../../../components/searchBar";
import PriceFilter from "../../../components/priceFilter";
import K from "../../../constants";

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
  const [data, setData] = useState(K.EVENTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const handleMonthChange = (name) => {
    setSelectedButton(name);
    filterEvents(name, searchQuery, minPrice, maxPrice);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    filterEvents(selectedButton, query, minPrice, maxPrice);
  };

  const handleMinPriceChange = (price) => {
    setMinPrice(price);
    filterEvents(selectedButton, searchQuery, price, maxPrice);
  };

  const handleMaxPriceChange = (price) => {
    setMaxPrice(price);
    filterEvents(selectedButton, searchQuery, minPrice, price);
  };

  const filterEvents = (month, query, minPrice, maxPrice) => {
    let filteredEvents = K.EVENTS;

    if (month !== "All") {
      const monthIndex = months.find((m) => m.name === month).value;
      filteredEvents = filteredEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getMonth() + 1 === monthIndex;
      });
    }

    if (query) {
      filteredEvents = filteredEvents.filter(
        (event) =>
          event.name.toLowerCase().includes(query.toLowerCase()) ||
          event.location.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (minPrice) {
      filteredEvents = filteredEvents.filter(
        (event) => event.price >= minPrice
      );
    }

    if (maxPrice) {
      filteredEvents = filteredEvents.filter(
        (event) => event.price <= maxPrice
      );
    }

    setData(filteredEvents);
  };

  return (
    <div className="container mx-auto py-20" id="events">
      <h2 className="text-4xl mb-10 text-white font-semibold text-center">
        Events Calendar
      </h2>
      <div className="grid grid-cols-2 gap-4 p-4">
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />
        <PriceFilter
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinPriceChange={handleMinPriceChange}
          onMaxPriceChange={handleMaxPriceChange}
        />
      </div>
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
            data.map((d) => (
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
