import React from "react";
import { motion } from "framer-motion";
import { FiBell, FiSearch } from "react-icons/fi"; // Icônes via react-icons
import avatar from "../assets/profil.png"; // Remplacez par le chemin de votre image locale

const Header = () => {
    return (
        <motion.div
            className="flex flex-col sm:flex-row items-center justify-between px-4 py-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Gauche : Titre */}
            <div className="text-xl sm:text-2xl font-bold flex items-center">
                Dashboard Kivu Event <span className="ml-2">👋</span>
            </div>

            {/* Droite : Recherche, Notification et Avatar */}
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                {/* Barre de recherche */}
                <div className="relative flex items-center">
                    <FiSearch className="absolute left-3 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-2 w-full sm:w-48 text-sm rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Icône de notification */}
                <div className="relative">
                    <FiBell className="text-gray-500 text-xl" />
                    <div className="absolute w-2.5 h-2.5 bg-purple-500 rounded-full top-0 right-0 ring-2 ring-white"></div>
                </div>

                {/* Avatar */}
                <img
                    src={avatar}
                    alt="User Avatar"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300"
                />
            </div>
        </motion.div>
    );
};

export default Header;
