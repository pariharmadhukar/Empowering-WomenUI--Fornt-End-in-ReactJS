import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGraduationCap,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

function Home() {

  return (
    <div className="max-w-6xl mx-auto px-0 md:px-6 ">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center py-32 mb-16 "
      >
        <h1 className="text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Empowering Women,
          </span>
          <br />
          Transforming Lives
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Join our community of strong, supportive women making positive changes
          in the world.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/community"
            className="btn-primary flex items-center space-x-2 transition-transform duration-300 hover:scale-110"
          >
            <span>Join Community</span>
            <FaArrowRight />
          </Link>
          <Link
            to="/resources"
            className="btn-secondary transition-transform duration-300 hover:scale-110"
          >
            Explore Resources
          </Link>
        </div>
      </motion.section>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Learn",
            icon: <FaChartLine />,
            text: "Access curated resources for personal and professional growth",
            link: "/resources",
          },
          {
            title: "Connect",
            icon: <FaUsers />,
            text: "Join a supportive community of like-minded women",
            link: "/community",
          },
          {
            title: "Grow",
            icon: <FaGraduationCap />,
            text: "Participate in events and workshops for skill development",
            link: "/events",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
            className="card p-8 bg-white shadow-lg rounded-xl hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="text-purple-600 text-4xl mb-4">{item.icon}</div>
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              {item.title}
            </h2>
            <p className="text-gray-600 mb-4">{item.text}</p>
            <Link
              to={item.link}
              className="text-purple-600 hover:text-purple-700 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <FaArrowRight className="text-sm" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Home;
