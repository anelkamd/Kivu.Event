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


        </div>
    );
};

export default Dashboard;
