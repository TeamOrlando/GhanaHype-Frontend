/* eslint-disable react/prop-types */
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search by event name or location"
        className="p-2 pl-10 border-2 border-gray-300 rounded-lg w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
      />
      <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default SearchBar;
