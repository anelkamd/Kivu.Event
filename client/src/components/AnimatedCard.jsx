import React from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const AnimatedCard = ({ icon: Icon = FaSearch, text, onClick }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 15px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="p-4 bg-white shadow-md rounded-lg cursor-pointer flex items-center justify-center gap-2 transition-all"
            onClick={onClick}
        >
            <Icon className="text-indigo-500 text-lg" />
            <span className="text-gray-700 font-medium">{text}</span>
        </motion.div>
    );
};

export default AnimatedCard;
