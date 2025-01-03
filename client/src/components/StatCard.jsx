import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaChartLine, FaClipboardList } from "react-icons/fa";

const StatisticsCard = () => {
    const stats = [
        {
            title: "Total Users",
            value: "1,245",
            icon: <FaUsers className="text-blue-500 text-3xl" />,
            bgColor: "bg-blue-100",
        },
        {
            title: "Tasks Completed",
            value: "980",
            icon: <FaClipboardList className="text-green-500 text-3xl" />,
            bgColor: "bg-green-100",
        },
        {
            title: "Growth Rate",
            value: "25%",
            icon: <FaChartLine className="text-purple-500 text-3xl" />,
            bgColor: "bg-purple-100",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, translateY: -5 }}
                    transition={{ duration: 0.7, delay: index * 0.2 }}
                    className={`p-6 rounded-lg shadow-md flex items-center cursor-pointer ${stat.bgColor}`}
                >
                    {/* Icone */}
                    <motion.div
                        className="p-4 rounded-full bg-white flex items-center justify-center shadow-sm mr-4"
                        whileHover={{ rotate: 15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {stat.icon}
                    </motion.div>
                    {/* Informations */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-800">{stat.value}</h4>
                        <p className="text-sm text-gray-600">{stat.title}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default StatisticsCard;
