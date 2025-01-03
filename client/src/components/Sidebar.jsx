import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import profil from "../assets/profil.png"
import {
    FaHome,
    FaCalendarAlt,
    FaRegListAlt,
    FaComments,
    FaCog,
} from "react-icons/fa";
import logo from "../assets/logo.png"

const Sidebar = () => {
    const menuItems = [
        { icon: <FaHome />, path: "/" },
        { icon: <FaCalendarAlt />, path: "/calendrier" },
        { icon: <FaRegListAlt />, path: "/evenements" },
        { icon: <FaComments />, path: "/chat" },
        { icon: <FaCog />, path: "/parametres" },
    ];

    return (
        <div className="h-screen bg-gray-100 flex flex-col items-center py-4 w-20 rounded-r-lg shadow-md">
            {/* Logo */}
            <motion.div
                className="w-14 h-14 rounded-full overflow-hidden mb-10"
                whileHover={{ scale: 1.1 }}
            >
                <img
                    src={logo}
                    alt="Logo"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Menu Items */}
            <nav className="flex-1 flex flex-col gap-6">
                {menuItems.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className={({ isActive }) =>
                            `flex items-center justify-center w-12 h-12 rounded-full transition ${
                                isActive ? "bg-black text-white" : "bg-white"
                            } shadow hover:bg-gray-200`
                        }
                    >
                        <span className="text-xl">{item.icon}</span>
                    </NavLink>
                ))}
            </nav>

            {/* User Profile */}
            <div className="mt-10">
                <motion.div
                    className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300"
                    whileHover={{ scale: 1.1 }}
                >
                    <img
                        src={profil}
                        alt="User"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Sidebar;
