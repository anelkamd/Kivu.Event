import React from "react";
import { FaRobot, FaSearch, FaCogs, FaEdit } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import Profil from "../assets/profil.png";
import AnimatedCard from "../components/AnimatedCard.jsx";
import { motion } from "framer-motion";

const Chat = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-b from-gray-100 to-purple-50 flex flex-col justify-between font-poppins"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Header */}
            <motion.header
                className="flex justify-between items-center p-4"
                variants={itemVariants}
            >
                <div className="flex items-center gap-3">
                    <motion.div
                        className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaRobot />
                    </motion.div>
                    <h1 className="font-semibold text-lg">Kivu Event AI</h1>
                </div>
                <motion.div
                    className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300"
                    whileHover={{ scale: 1.1 }}
                >
                    <img
                        src={Profil}
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </motion.header>

            {/* Main Section */}
            <motion.main
                className="flex-1 flex flex-col items-center justify-center text-center px-3"
                variants={containerVariants}
            >
                <motion.h2 className="text-2xl sm:text-3xl font-semibold mb-4" variants={itemVariants}>
                    Hi Anelka MD
                </motion.h2>
                <motion.p className="text-xl sm:text-2xl font-bold mb-2" variants={itemVariants}>
                    What would you like to know?
                </motion.p>
                <motion.p className="text-gray-500 mb-8" variants={itemVariants}>
                    Use one of the most common prompts below or use your own to begin.
                </motion.p>

                {/* Prompt Options */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl"
                    variants={containerVariants}
                >
                    <AnimatedCard
                        icon={FaCogs}
                        text="How does AI work in a technical capacity"
                        onClick={() => alert("AI Technical Capacity")}
                    />
                    <AnimatedCard
                        icon={FaEnvelope}
                        text="Generate an email to job offer"
                        onClick={() => alert("Job Offer Email")}
                    />
                    <AnimatedCard
                        icon={FaEdit}
                        text="Write a to-do list for a personal project or task"
                        onClick={() => alert("To-Do List")}
                    />
                </motion.div>
            </motion.main>

            {/* Footer Input Section */}
            <motion.footer
                className="p-6 flex items-center justify-center gap-4 "
                variants={itemVariants}
            >
                <motion.input
                    type="text"
                    placeholder="Ask whatever you want"
                    className="flex-1 max-w-3xl p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition"
                    whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-indigo-500 text-white rounded-full p-4 flex items-center justify-center shadow-md hover:bg-indigo-600 transition-all"
                >
                    <FaSearch />
                </motion.button>
            </motion.footer>
        </motion.div>
    );
};

export default Chat;
