import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaCalendarAlt, FaRegListAlt, FaComments, FaCog, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
        { name: 'Dashboard', icon: <FaHome />, path: '/' },
        { name: 'Calendrier', icon: <FaCalendarAlt />, path: '/calendrier' },
        { name: 'Événements', icon: <FaRegListAlt />, path: '/evenements' },
        { name: 'Programme', icon: <FaRegListAlt />, path: '/programme' },
        { name: 'Chat', icon: <FaComments />, path: '/chat' },
        { name: 'Paramètres', icon: <FaCog />, path: '/parametres' },
    ];

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <motion.div
            className={`h-screen bg-gray-800 text-white flex flex-col ${isCollapsed ? 'w-20' : 'w-64'}`}
            initial={{ width: isCollapsed ? 80 : 256 }}
            animate={{ width: isCollapsed ? 80 : 256 }}
            transition={{ duration: 0.3 }}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                {!isCollapsed && <div className="text-xl font-bold">Kivu.Event</div>}
                <button onClick={toggleCollapse} className="text-white">
                    {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
                </button>
            </div>

            {/* Menu */}
            <nav className="flex-1">
                <ul className="space-y-2 p-4">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition ${
                                        isActive ? 'bg-gray-700' : ''
                                    }`
                                }
                            >
                                <span className="text-xl">{item.icon}</span>
                                <AnimatePresence>
                                    {!isCollapsed && (
                                        <motion.span
                                            className="text-sm font-medium"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.div>
    );
};

export default Sidebar;
