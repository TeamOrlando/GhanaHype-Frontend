/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";

const EventCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <motion.div
      className="relative rounded-xl h-[400px] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src={props.data.image}
            alt={props.data.name}
            className="object-fill rounded-xl"
            style={{ width: "100%", height: "400px" }}
          />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
            padding: "20px",
            borderRadius: "1rem",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
          className="gap-4 text-white"
        >
          <p className="text-2xl font-bold">{props.data.name}</p>
          <p className="text-sm">{props.data.description}</p>
          <p className="text-md">{props.data.location}</p>
          <p className="text-md">{props.data.date}</p>
          <p className="text-lg font-semibold">GHC{props.data.price}</p>

          <button className="p-4 my-5 border-2 border-gray-600 rounded-xl hover:bg-white hover:text-black hover:border-white transition duration-300">
            Book
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default EventCard;
