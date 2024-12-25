import { motion } from 'framer-motion';
import Header from "../components/Header.jsx";
import EventCard from "../components/EventCard.jsx";
import Calendar from "../components/Calendar.jsx";


const Dashboard = () => {
    return (
        <div className="flex flex-col w-full h-screen p-2 bg-gray-100 overflow-auto">
            {/* Header Section */}
            <div className="mb-6">
                <Header/>
            </div>

            {/* Overview Section */}
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-2 grid grid-cols-2 md:grid-cols-2 gap-4">
                    <EventCard/>
                    <EventCard/>
                </div>
                <Calendar/>
            </div>


            {/* Ongoing Events Section */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Ongoing Event</h3>
                    <button className="text-indigo-500">View All</button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <motion.div className="p-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-md" whileHover={{ scale: 1.03 }}>
                        <h4 className="text-lg font-bold">Creator Meetup</h4>
                        <p>10 Aug, 2020 - 10:15AM to 12:30PM</p>
                        <p className="mt-2 text-sm">142 Members</p>
                    </motion.div>
                    <motion.div className="p-6 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-md" whileHover={{ scale: 1.03 }}>
                        <h4 className="text-lg font-bold">Design Thinking</h4>
                        <p>10 Aug, 2020 - 8:30AM to 5:30PM</p>
                        <p className="mt-2 text-sm">245 Members</p>
                    </motion.div>
                </div>
            </div>

            {/* Upcoming Events Section */}
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Upcoming Events</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <motion.div className="p-4 bg-white rounded-lg shadow-md" whileHover={{ scale: 1.03 }}>
                            <h4 className="text-sm font-semibold">18 Aug</h4>
                            <p>Design Meeting</p>
                            <p className="text-sm text-gray-500">10:15AM to 12:30PM</p>
                        </motion.div>
                        <motion.div className="p-4 bg-white rounded-lg shadow-md" whileHover={{ scale: 1.03 }}>
                            <h4 className="text-sm font-semibold">22 Aug</h4>
                            <p>Workshop Meeting</p>
                            <p className="text-sm text-gray-500">9:00AM to 5:30PM</p>
                        </motion.div>
                        <motion.div className="p-4 bg-white rounded-lg shadow-md" whileHover={{ scale: 1.03 }}>
                            <h4 className="text-sm font-semibold">28 Aug</h4>
                            <p>Weekly Meeting</p>
                            <p className="text-sm text-gray-500">10:30AM to 5:00PM</p>
                        </motion.div>
                    </div>
                </div>
                <div>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Calendar</h3>
                    </div>
                    <motion.div className="p-6 bg-white rounded-lg shadow-md" whileHover={{ scale: 1.03 }}>
                        {/* Placeholder for Calendar Component */}
                        <p className="text-center text-gray-500">Calendar Component</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
