import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Calendar = () => {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(today);

    const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    const startDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    ).getDay();

    const daysInMonth = getDaysInMonth(
        currentDate.getMonth(),
        currentDate.getFullYear()
    );

    const prevMonth = () => {
        const prev = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - 1,
            1
        );
        setCurrentDate(prev);
    };

    const nextMonth = () => {
        const next = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            1
        );
        setCurrentDate(next);
    };

    const isToday = (day) => {
        return (
            day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear()
        );
    };

    return (
        <motion.div
            className="max-w-auto p-8 rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
        >
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={prevMonth}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    <AiOutlineLeft size={20} />
                </button>
                <h4 className="text-lg font-semibold text-gray-900">
                    {currentDate.toLocaleString("default", {
                        month: "long",
                    })}{" "}
                    {currentDate.getFullYear()}
                </h4>
                <button
                    onClick={nextMonth}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    <AiOutlineRight size={20} />
                </button>
            </div>

            <div className="grid grid-cols-7 text-center text-sm text-gray-500 font-medium">
                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                    <span key={day}>{day}</span>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-2 mt-2">
                {/* Empty slots for days of the previous month */}
                {Array.from({ length: startDayOfMonth }).map((_, index) => (
                    <span key={`empty-${index}`} className="h-8"></span>
                ))}

                {/* Days of the current month */}
                {Array.from({ length: daysInMonth }).map((_, index) => {
                    const day = index + 1;
                    return (
                        <span
                            key={day}
                            className={`flex items-center justify-center h-8 w-8 rounded-full cursor-pointer ${
                                isToday(day)
                                    ? "bg-blue-500 text-white font-bold"
                                    : "text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {day}
                        </span>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default Calendar;
