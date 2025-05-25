import React, { useState } from "react";
import { FaBriefcase, FaGraduationCap, FaUserFriends, FaCheckCircle, FaRobot, FaLaptopCode, FaHandshake, FaFireAlt, FaUsers, FaBookOpen, FaMoneyBill } from "react-icons/fa";

function SkillDevelopment() {
  const [activeTab, setActiveTab] = useState("trending");

  const recommendedSkills = [
    {
      title: "Data Analysis",
      demand: "High",
      matchScore: 95,
      courses: [
        "SQL Fundamentals",
        "Python for Data Analysis",
        "Business Intelligence",
      ],
    },
    {
      title: "Digital Marketing",
      demand: "High",
      matchScore: 88,
      courses: [
        "Social Media Marketing",
        "SEO Fundamentals",
        "Content Strategy",
      ],
    },
    {
      title: "Project Management",
      demand: "Medium",
      matchScore: 82,
      courses: ["Agile Methodology", "Leadership Skills", "Risk Management"],
    },
  ];

  const mentors = [
    {
      name: "Sarah Chen",
      role: "Tech Lead at Google",
      expertise: ["Software Development", "Career Transition", "Leadership"],
      availability: "2 slots available",
    },
    {
      name: "Maria Rodriguez",
      role: "Marketing Director",
      expertise: ["Digital Marketing", "Brand Strategy", "Team Management"],
      availability: "1 slot available",
    },
  ];

  const careerPathways = [
    {
      title: "From Data Analyst to Data Scientist",
      description: "Expand your data analysis skills to machine learning and advanced statistical modeling.",
      skillsNeeded: ["Statistics", "Machine Learning", "Data Visualization"],
      growthPotential: "High",
    },
    {
      title: "Digital Marketing Specialist to Marketing Manager",
      description: "Develop leadership and strategic skills to manage marketing teams and campaigns.",
      skillsNeeded: ["Team Leadership", "Strategic Planning", "Budget Management"],
      growthPotential: "Medium",
    },
  ];

  const freelanceResources = [
    {
      title: "Upwork",
      description: "Find freelance jobs in various categories.",
      link: "#",
    },
    {
      title: "Remote Work Guidance",
      description: "Tips and resources for succeeding in remote work.",
      link: "#",
    },
    {
      title: "Entrepreneurship 101",
      description: "Basics of starting your own business.",
      link: "#",
    },
  ];

  const womenBusinessSupportMentors = [
    {
      name: "Jane Doe",
      role: "CEO of Startup Inc.",
      expertise: ["Business Strategy", "Funding", "Scaling"],
      availability: "Limited slots",
    },
    {
      name: "Ashley Smith",
      role: "Founder of Tech Solutions",
      expertise: ["Tech Entrepreneurship", "Product Development", "Marketing"],
      availability: "2 slots",
    },
  ];

  const trendingSkillsList = [
    "Artificial Intelligence (AI)",
    "Digital Marketing",
    "Software Development",
    "Business Management",
  ];

  const mentorshipCoachingList = [
    { type: "Live Sessions", description: "Join live workshops and Q&A sessions with experts." },
    { type: "1-on-1 Mentorship", description: "Personalized guidance from industry leaders." },
  ];

  const certificationsCoursesList = [
    { type: "Free Courses", description: "Access a range of free courses to start learning." },
    { type: "Paid Courses", description: "Invest in premium courses for in-depth knowledge." },
  ];

  const investmentEducationList = [
    { type: "Scholarships", description: "Find scholarships to fund your education." },
    { type: "Micro-loans", description: "Explore micro-loan options for skill development." },
    { type: "Funding Options", description: "Discover various funding opportunities for education." },
  ];


  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-purple-800 mb-8">
        Skill Development
      </h1>

      {/* Top Insights Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
          <FaBriefcase className="w-8 h-8 text-purple-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-purple-700 mb-2">
            Job Market Insights
          </h2>
          <p className="text-gray-600">
            AI-powered career path recommendations
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
          <FaGraduationCap className="w-8 h-8 text-purple-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-purple-700 mb-2">
            Personalized Learning
          </h2>
          <p className="text-gray-600">Customized skill development tracks</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
          <FaUserFriends className="w-8 h-8 text-purple-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-purple-700 mb-2">
            Mentorship
          </h2>
          <p className="text-gray-600">Connect with industry experts</p>
        </div>
      </div>

      {/* Skill Investment Dashboard Tabs */}
      <div className="mb-8">
        <nav className="bg-white rounded-lg shadow-md p-4">
          <ul className="flex space-x-4">
            <li className="-mb-px">
              <button
                onClick={() => setActiveTab("trending")}
                className={`py-2 px-4 rounded-t-lg ${activeTab === "trending" ? 'bg-purple-100 text-purple-800 font-semibold' : 'text-gray-600 hover:text-purple-700'}`}
              >
                <FaFireAlt className="inline-block mr-2" /> Trending Skills
              </button>
            </li>
            <li className="-mb-px">
              <button
                onClick={() => setActiveTab("mentorship")}
                className={`py-2 px-4 rounded-t-lg ${activeTab === "mentorship" ? 'bg-purple-100 text-purple-800 font-semibold' : 'text-gray-600 hover:text-purple-700'}`}
              >
                <FaUsers className="inline-block mr-2" /> Mentorship & Coaching
              </button>
            </li>
            <li className="-mb-px">
              <button
                onClick={() => setActiveTab("certifications")}
                className={`py-2 px-4 rounded-t-lg ${activeTab === "certifications" ? 'bg-purple-100 text-purple-800 font-semibold' : 'text-gray-600 hover:text-purple-700'}`}
              >
                <FaBookOpen className="inline-block mr-2" /> Certifications & Courses
              </button>
            </li>
            <li className="-mb-px">
              <button
                onClick={() => setActiveTab("investment")}
                className={`py-2 px-4 rounded-t-lg ${activeTab === "investment" ? 'bg-purple-100 text-purple-800 font-semibold' : 'text-gray-600 hover:text-purple-700'}`}
              >
                <FaMoneyBill className="inline-block mr-2" /> Investment in Education
              </button>
            </li>
          </ul>
        </nav>

        {/* Tab Content */}
        <div className="bg-white p-6 rounded-b-lg shadow-md">
          {activeTab === "trending" && (
            <div>
              <h2 className="text-xl font-semibold text-purple-700 mb-4 flex items-center gap-2">
                <FaFireAlt className="text-purple-600" /> Trending Skills
              </h2>
              <ul>
                {trendingSkillsList.map((skill, index) => (
                  <li key={index} className="py-2 border-b border-gray-200 last:border-b-0">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "mentorship" && (
            <div>
              <h2 className="text-xl font-semibold text-purple-700 mb-4 flex items-center gap-2">
                <FaUsers className="text-purple-600" /> Mentorship & Coaching
              </h2>
              {mentorshipCoachingList.map((item, index) => (
                <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-purple-600">{item.type}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "certifications" && (
            <div>
              <h2 className="text-xl font-semibold text-purple-700 mb-4 flex items-center gap-2">
                <FaBookOpen className="text-purple-600" /> Certifications & Courses
              </h2>
              {certificationsCoursesList.map((item, index) => (
                <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-purple-600">{item.type}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "investment" && (
            <div>
              <h2 className="text-xl font-semibold text-purple-700 mb-4 flex items-center gap-2">
                <FaMoneyBill className="text-purple-600" /> Investment in Education
              </h2>
              {investmentEducationList.map((item, index) => (
                <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-purple-600">{item.type}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>


      {/* Recommended Skills Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-purple-700 mb-4">
          Recommended Skills
        </h2>
        <div className="space-y-6">
          {recommendedSkills.map((skill) => (
            <div key={skill.title} className="border-b border-gray-200 pb-4 last:border-b-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-purple-600">{skill.title}</h3>
                  <p className="text-sm text-gray-500">
                    Market Demand: {skill.demand}
                  </p>
                </div>
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                  {skill.matchScore}% Match
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {skill.courses.map((course) => (
                  <span
                    key={course}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI-Based Career Pathways Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-purple-700 mb-4 flex items-center gap-2">
          <FaRobot className="text-purple-600" /> AI-Based Career Pathways
        </h2>
        <div className="space-y-6">
          {careerPathways.map((pathway) => (
            <div key={pathway.title} className="border-b border-gray-200 pb-4 last:border-b-0">
              <h3 className="font-medium text-purple-600">{pathway.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{pathway.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {pathway.skillsNeeded.map((skill) => (
                  <span
                    key={skill}
                    className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs hover:bg-purple-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">Growth Potential: {pathway.growthPotential}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Freelancing & Remote Work Hub Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-purple-700 mb-4 flex items-center gap-2">
          <FaLaptopCode className="text-purple-600" /> Freelancing & Remote Work Hub
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {freelanceResources.map((resource) => (
            <div key={resource.title} className="p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <h3 className="font-medium text-purple-600 mb-2">{resource.title}</h3>
              <p className="text-gray-600 text-sm">{resource.description}</p>
              <a href={resource.link} className="text-purple-600 hover:underline block mt-2 text-sm">Learn More</a>
            </div>
          ))}
        </div>
      </div>


      {/* Women-Led Business Support Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-purple-700 mb-4 flex items-center gap-2">
          <FaHandshake className="text-purple-600" /> Women-Led Business Support Mentorship
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {womenBusinessSupportMentors.map((mentor) => (
            <div
              key={mentor.name}
              className="border border-gray-200 rounded-lg p-4 hover:border-purple-400 transition-colors duration-200"
            >
              <h3 className="font-medium text-purple-600 mb-2">
                {mentor.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{mentor.role}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {mentor.expertise.map((exp) => (
                  <span
                    key={exp}
                    className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs hover:bg-purple-200 transition-colors duration-200"
                  >
                    {exp}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {mentor.availability}
                </span>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition text-sm flex items-center gap-1">
                  Request <FaCheckCircle />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillDevelopment;
