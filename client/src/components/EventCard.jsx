import { motion } from "framer-motion";
import eventImage from "../assets/event.jpg";

const EventCard = () => {
    // Variants pour les animations
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    };

    return (
        <motion.div
            className="w-100 rounded-2xl bg-white shadow-lg overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            {/* Image */}
            <div className="bg-purple-500">
                <img
                    src={eventImage}
                    alt="Event"
                    className="w-full h-40 object-cover"
                />
            </div>

            {/* Content */}
            <motion.div
                className="p-4 bg-gradient-to-br from-white via-white to-green-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Creator Meetup
                </h3>

                {/* Date and Time */}
                <p className="text-sm text-gray-500 mb-4">
                    10 Aug, 2020 • 10:15AM - 12:30PM
                </p>

                {/* Members */}
                <p className="text-sm text-indigo-600 font-medium">142 Members</p>
            </motion.div>
        </motion.div>
    );
};

export default EventCard;
