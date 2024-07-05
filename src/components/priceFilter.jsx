/* eslint-disable react/prop-types */

const PriceFilter = ({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}) => {
  return (
    <div className="flex gap-4">
      <input
        type="number"
        value={minPrice}
        onChange={(e) => onMinPriceChange(e.target.value)}
        placeholder="Min Price"
        className="p-2 border-2 border-gray-300 rounded-lg w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => onMaxPriceChange(e.target.value)}
        placeholder="Max Price"
        className="p-2 border-2 border-gray-300 rounded-lg w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
      />
    </div>
  );
};

export default PriceFilter;
