import React, { useState } from "react";
import { FaHistory, FaCalendarAlt, FaEdit, FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { settoken } from "../Slices/authReducer";
import { useNavigate } from "react-router-dom";

function ShopNavbar() {
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const signoutHandler=async()=>{
        localStorage.removeItem("token");
        dispatch(settoken(""))
        navigate('/')
    }
    return (
        <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-800">
                <span>Auracuts</span>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-6">
                {/* History */}
                <button className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
                    <FaHistory className="mr-2" /> History
                </button>

                {/* Upcoming */}
                <button className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
                    <FaCalendarAlt className="mr-2" /> Upcoming
                </button>

                {/* Booking */}
                <button className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
                    <FaEdit className="mr-2" /> Booking
                </button>

                {/* Edit */}
                <button className="flex items-center text-gray-600 hover:text-gray-900 font-medium">
                    <FaEdit className="mr-2" /> Edit
                </button>

                {/* Profile Image */}
                <div className="relative">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Profile"
                        className="w-10 h-10 rounded-full cursor-pointer"
                        onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                    />

                    {/* Dropdown Menu */}
                    {profileMenuOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                            <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                                <FaCog className="mr-2" /> Setting
                            </button>
                            <button onClick={signoutHandler} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                                <FaSignOutAlt className="mr-2" /> Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default ShopNavbar;
