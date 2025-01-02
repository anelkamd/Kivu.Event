import Header from "../components/Header.jsx";
import EventCard from "../components/EventCard.jsx";
import Calendar from "../components/Calendar.jsx";
import {FaCalendarAlt} from "react-icons/fa";
import { motion } from "framer-motion";




const Dashboard = () => {
    return (
        <div className="flex flex-col w-full h-screen p-2 bg-gray-100 overflow-auto">
            <div className="mb-2">
                <Header/>
            </div>

            <div className="flex flex-row items-center gap-6 ">
                {/* Section des événements */}
                <div className="flex-1 flex flex-col bg-amber-50 rounded-2xl p-5">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Ongoing Event</h3>
                        <button className="text-indigo-500">View All</button>
                    </div>

                    {/* Cartes d'événements */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                        <EventCard/>
                        <EventCard/>
                    </div>
                </div>

                <div className="w-1/3 ">
                    <Calendar/>
                </div>
            </div>
            {/* Upcoming Events Section */}
            <div className="min-h-screen bg-gray-100 p-6 font-poppins flex flex-col gap-6">
                {/* Header Section */}
                <header className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg">
                    <h1 className="text-2xl font-bold text-indigo-600">
                        Event Management Dashboard
                    </h1>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-600">Welcome, Event Manager!</span>
                    </div>
                </header>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Event Progress */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        className="bg-white shadow-md rounded-lg p-6"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Events Progress
                        </h3>
                        <div className="flex justify-between items-center mb-2">
                            <span>Annual Conference</span>
                            <span className="text-sm text-gray-500">75% Completed</span>
                        </div>
                        <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="absolute h-full bg-indigo-500"
                                style={{width: "75%"}}
                            ></div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <span>Quarterly Review</span>
                            <span className="text-sm text-gray-500">50% Completed</span>
                        </div>
                        <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="absolute h-full bg-indigo-500"
                                style={{width: "50%"}}
                            ></div>
                        </div>
                    </motion.div>

                    {/* Team Assignments */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="bg-white shadow-md rounded-lg p-6"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Team Assignments
                        </h3>
                        <ul className="space-y-2">
                            {[
                                {name: "Alice Johnson", task: "Venue Booking"},
                                {name: "John Smith", task: "Catering"},
                                {name: "Emma Brown", task: "Guest Invitations"},
                            ].map((teamMember, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm"
                                >
                                    <span className="font-semibold">{teamMember.name}</span>
                                    <span className="text-sm text-gray-500">
                                    {teamMember.task}
                                </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Upcoming Events Section */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.7}}
                    className="bg-white shadow-md rounded-lg p-6"
                >
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                            Upcoming Events
                        </h3>
                        <button className="text-indigo-500">Add New Event</button>
                    </div>
                    <div className="space-y-4">
                        {[
                            {date: "18 Aug", name: "Design Meeting", location: "Las Vegas"},
                            {date: "20 Aug", name: "Team Building", location: "New York"},
                        ].map((event, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm"
                            >
                                <div>
                                    <h4 className="font-semibold">{event.name}</h4>
                                    <p className="text-sm text-gray-500">{event.date}</p>
                                    <p className="text-sm text-gray-500">{event.location}</p>
                                </div>
                                <FaCalendarAlt className="text-indigo-500 text-2xl"/>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

        </div>
    );
};

export default Dashboard;
