import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, px } from "framer-motion";
import {
  FaChartLine,
  FaGraduationCap,
  FaShieldAlt,
  FaTimes,
  FaSignOutAlt,
  FaUser,
  FaCog,
  FaBell,
  FaBookmark,
  FaUserCircle,
} from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import debounce from "lodash.debounce";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assuming user is logged in

  console.log("navbar", isAuthenticated);
  console.log("navbar", localStorage.getItem("token"));

  const navigate = useNavigate();
  const lastScrollY = useRef(window.scrollY);

  // Optimized Scroll Event Handler
  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    }, 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close Mobile Menu on Escape Key
  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setIsOpen(false);
    setIsLoggedIn(false);
    navigate("/"); // Redirect after logout
  };

  // Memoized Navigation Links
  const navLinks = useMemo(
    () => [
      { to: "/financial-dashboard", icon: <FaChartLine />, text: "Finance" },
      { to: "/skill-development", icon: <FaGraduationCap />, text: "Skills" },
      { to: "/safety", icon: <FaShieldAlt />, text: "Safety" },
    ],
    []
  );

  const profileLinks = useMemo(
    () => [
      { to: "/profile", icon: <FaUser />, text: "My Profile" },
      { to: "/settings", icon: <FaCog />, text: "Settings" },
      { to: "/notifications", icon: <FaBell />, text: "Notifications" },
      { to: "/saved", icon: <FaBookmark />, text: "Saved Resources" },
    ],
    []
  );

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-transparent backdrop-blur-md shadow-lg fixed top-0 left-0 w-full z-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Empower<span className="text-purple-600">Her</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="nav-link flex items-center space-x-2 hover:scale-105 transition-transform"
                >
                  {link.icon} <span>{link.text}</span>
                </Link>
              ))}

              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
                  >
                    <FaUserCircle className="text-purple-600 text-xl" />
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <span>Login</span>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              {isAuthenticated ? (
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
                >
                  <FaUserCircle className="text-purple-600 text-xl" />
                </button>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-1 px-4 py-2  rounded-lg transition-colors"
                >
                  <FcMenu size={"30px"} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.nav>
      {/* Profile Sidebar */}
      <AnimatePresence>
        {isProfileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
            onClick={() => setIsProfileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 right-0 h-full bg-white shadow-xl w-full max-w-sm sm:max-w-md 
        "
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-purple-800">
                    Your Profile
                  </h2>
                  <button
                    onClick={() => setIsProfileOpen(false)}
                    className="p-2 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    <FaTimes className="text-gray-600" />
                  </button>
                </div>

                <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-gray-200">
                  <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center">
                    <FaUserCircle className="text-purple-600 text-4xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">parihar</h3>
                    <p className="text-gray-600">parihar2810@gmail.com</p>
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  {/* show only mobile view */}
                  <div className="p-0 md:hidden">
                    {navLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-purple-50 transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <div className="text-purple-600">{link.icon}</div>
                        <span className="text-gray-700">{link.text}</span>
                      </Link>
                    ))}
                  </div>

                  {profileLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-purple-50 transition-colors"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <div className="text-purple-600">{link.icon}</div>
                      <span className="text-gray-700">{link.text}</span>
                    </Link>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <FaSignOutAlt />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
