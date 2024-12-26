import { motion } from 'framer-motion';
import Header from "../components/Header.jsx";
import EventCard from "../components/EventCard.jsx";
import Calendar from "../components/Calendar.jsx";


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
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Upcoming Events</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <motion.div className="p-4 bg-white rounded-lg shadow-md" whileHover={{scale: 1.03}}>
                            <h4 className="text-sm font-semibold">18 Aug</h4>
                            <p>Design Meeting</p>
                            <p className="text-sm text-gray-500">10:15AM to 12:30PM</p>
                        </motion.div>
                        <motion.div className="p-4 bg-white rounded-lg shadow-md" whileHover={{scale: 1.03}}>
                            <h4 className="text-sm font-semibold">22 Aug</h4>
                            <p>Workshop Meeting</p>
                            <p className="text-sm text-gray-500">9:00AM to 5:30PM</p>
                        </motion.div>
                        <motion.div className="p-4 bg-white rounded-lg shadow-md" whileHover={{scale: 1.03}}>
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
                    <motion.div className="p-6 bg-white rounded-lg shadow-md" whileHover={{scale: 1.03}}>
                        {/* Placeholder for Calendar Component */}
                        <p className="text-center text-gray-500">Calendar Component</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
