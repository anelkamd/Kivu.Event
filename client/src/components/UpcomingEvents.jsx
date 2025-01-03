import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import couv from "../assets/event.jpg"

const UpcomingEvents = () => {
    const events = [
        {
            image: couv,
            name: 'Jenga',
            description: 'Language lessons with the most popular teachers',
            category: 'Hackathon',
            date: '20 fevrier',
        },
        {
            image: couv,
            name: 'Apple News',
            description: 'Learn advanced math techniques',
            category: 'Conference',
            date: '15 Avril',
        },
        {
            image: couv,
            name: 'Javascript Concept',
            description: 'Learn advanced math techniques',
            category: 'Formation',
            date: '02 Juillet',
        },
        {
            image: couv,
            name: 'React JS',
            description: 'Learn advanced math techniques',
            category: 'Education',
            date: '15 Aout',
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
        >
            {events.map((event, index) => (
                <div
                    key={index}
                    className="bg-white shadow-lg rounded-xl flex items-center p-4 space-x-4"
                >
                    {/* Image de l'événement */}
                    <div className="w-24 h-24 flex-shrink-0">
                        <img
                            src={event.image}
                            alt={event.name}
                            className="w-full h-full rounded-lg object-cover"
                        />
                    </div>

                    {/* Détails de l'événement */}
                    <div className="flex-grow">
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {event.name}
                            </h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                            <span className="px-3 py-1 bg-gray-100 rounded-lg mr-2">
                                {event.category}
                            </span>
                            <span>Start: {event.date}</span>
                        </div>
                    </div>

                    {/* Bouton "View More" */}
                    <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-600 transition">
                        View More
                    </button>
                </div>
            ))}
        </motion.div>
    );
};

export default UpcomingEvents;
