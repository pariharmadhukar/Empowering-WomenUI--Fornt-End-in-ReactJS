import React, { useState, useEffect } from "react";
import {
  FaShieldAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaMicrophone,
  FaMobile,
  FaBell,
  FaClock
} from "react-icons/fa";

function Safety() {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [isListening, setIsListening] = useState(false);
  const [deviceConnected, setDeviceConnected] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [showEmergencyButtons, setShowEmergencyButtons] = useState(false);

  const [notificationPreferences, setNotificationPreferences] = useState({
    smsAlerts: true,
    emailNotifications: true,
    emergencyContactAlerts: true,
  });

  const [locationSharing, setLocationSharing] = useState({
    shareWithContacts: true,
    realTimeTracking: true,
  });

  const emergencyContacts = [
    { name: "Local Police", number: "911" },
    { name: "Women's Helpline", number: "1-800-799-7233" },
    { name: "Crisis Support", number: "1-800-273-8255" },
  ];

  const safetyResources = [
    {
      title: "Self-Defense Classes",
      schedule: "Every Saturday, 10 AM",
      location: "Community Center",
    },
    {
      title: "Safety Awareness Workshop",
      schedule: "First Sunday of each month",
      location: "Online",
    },
    {
      title: "Emergency Response Training",
      schedule: "Monthly",
      location: "Various Locations",
    },
  ];

  const handleNotificationChange = (preference) => {
    setNotificationPreferences((prev) => ({
      ...prev,
      [preference]: !prev[preference],
    }));
  };

  const handleLocationSharingChange = (setting) => {
    setLocationSharing((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  useEffect(() => {
    if (voiceEnabled && "webkitSpeechRecognition" in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");

        if (
          transcript.toLowerCase().includes("emergency") ||
          transcript.toLowerCase().includes("help")
        ) {
          handleEmergency();
        }
      };

      if (isListening) {
        recognition.start();
      }

      return () => {
        recognition.stop();
      };
    }
  }, [isListening, voiceEnabled]);

  const handleEmergency = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          emergencyContacts.forEach((contact) => {
            sendEmergencyAlert(contact.number);
          });
          alert("Emergency alert sent with your location. Help is on the way.");
        },
        (error) => {
          console.error("Error getting location:", error);
          alert(
            "Unable to get location. Please call emergency services directly."
          );
        }
      );
    }
  };

  const sendEmergencyAlert = (number) => {
    console.log(`Emergency alert sent to ${number}`);
  };

  const toggleVoiceCommand = () => {
    setIsListening(!isListening);
    if (!isListening) {
      alert(
        "Voice commands activated. Say 'emergency' or 'help' to trigger alert."
      );
    }
  };

  const connectDevice = () => {
    setDeviceConnected(true);
    alert("Safety device are coming soon.");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-purple-800">
          Safety Network
        </h1>

        {/* Mobile Controls */}
        <div className="flex flex-col gap-3 sm:hidden">
          {/* Voice Controls */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              className={`px-3 py-3 rounded-lg flex items-center justify-center space-x-2 ${
                voiceEnabled ? "bg-green-600" : "bg-white"
              } text-gray-700 transition shadow-md hover:shadow-lg`}
            >
              <FaMicrophone className="text-lg" />
              <span className="text-sm">
                {voiceEnabled ? "Voice On" : "Enable Voice"}
              </span>
            </button>
            <button
              onClick={toggleVoiceCommand}
              className={`px-3 py-3 rounded-lg flex items-center justify-center space-x-2 ${
                isListening ? "bg-purple-600" : "bg-white"
              } text-gray-700 transition shadow-md hover:shadow-lg`}
              disabled={!voiceEnabled}
            >
              <FaMicrophone className="text-lg" />
              <span className="text-sm">
                {isListening ? "Listening..." : "Start Listen"}
              </span>
            </button>
          </div>

          {/* Emergency Button */}
          <button
            onClick={handleEmergency}
            className="w-full bg-red-600 text-white py-4 rounded-lg hover:bg-red-700 transition flex items-center justify-center space-x-2 shadow-lg"
          >
            <FaShieldAlt className="text-xl" />
            <span className="text-lg font-semibold">Emergency Alert</span>
          </button>
        </div>

        {/* Desktop Control Buttons */}
        <div className="hidden sm:flex space-x-3">
          <button
            onClick={() => setVoiceEnabled(!voiceEnabled)}
            className={`px-3 py-2 rounded-lg flex items-center space-x-2 ${
              voiceEnabled ? "bg-green-600" : "bg-white"
            } text-gray-700 transition shadow-md hover:shadow-lg`}
          >
            <FaMicrophone />
            <span className="hidden md:inline">
              {voiceEnabled ? "Voice Enabled" : "Enable Voice"}
            </span>
          </button>
          <button
            onClick={toggleVoiceCommand}
            className={`px-3 py-2 rounded-lg flex items-center space-x-2 ${
              isListening ? "bg-purple-600" : "bg-white"
            } text-gray-700 transition shadow-md hover:shadow-lg`}
            disabled={!voiceEnabled}
          >
            <FaMicrophone />
            <span className="hidden md:inline">
              {isListening ? "Listening..." : "Start Listening"}
            </span>
          </button>
          <button
            onClick={handleEmergency}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center space-x-2 shadow-md hover:shadow-lg"
          >
            <FaShieldAlt />
            <span>Emergency Alert</span>
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Emergency Contacts Card */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
            <FaPhoneAlt className="mr-2" /> Emergency Contacts
          </h2>
          <div className="space-y-3">
            {emergencyContacts.map((contact) => (
              <div
                key={contact.name}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-gray-200 pb-3"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900">
                    {contact.name}
                  </span>
                  <span className="text-sm text-gray-600 sm:hidden">
                    {contact.number}
                  </span>
                </div>
                <a
                  href={`tel:${contact.number}`}
                  className="w-full sm:w-auto bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition text-center shadow-md hover:shadow-lg"
                >
                  <span className="hidden sm:inline">{contact.number}</span>
                  <span className="sm:hidden">Call Now</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Device Connection Card */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md relative overflow-hidden">
          <div className="absolute top-2 right-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <FaClock className="mr-1" />
            Coming Soon
          </div>
          <h2 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
            <FaMobile className="mr-2" /> Device Connection
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50 rounded-lg gap-3">
              <div>
                <h3 className="font-medium text-gray-900">Safety Device</h3>
                <p className="text-sm text-gray-600">
                  Connect your personal safety device
                </p>
              </div>
              <button
                disabled
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gray-400 text-white transition cursor-not-allowed opacity-75"
              >
                Coming Soon
              </button>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-medium text-yellow-800 mb-2">
                Feature Preview
              </h3>
              <p className="text-sm text-yellow-700">
                We're working on bringing you seamless device integration for
                enhanced safety features. Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>

        {/* Alert Settings Card */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md lg:col-span-2">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">
            Alert Settings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-900">
                  Notification Preferences
                </h3>
                <FaBell className="text-purple-600" />
              </div>
              <div className="space-y-3">
                {Object.entries(notificationPreferences).map(([key, value]) => (
                  <label
                    key={key}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                      checked={value}
                      onChange={() => handleNotificationChange(key)}
                    />
                    <span className="text-gray-700">
                      {key.split(/(?=[A-Z])/).join(" ")}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-900">Location Sharing</h3>
                <FaMapMarkerAlt className="text-purple-600" />
              </div>
              <div className="space-y-3">
                {Object.entries(locationSharing).map(([key, value]) => (
                  <label
                    key={key}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                      checked={value}
                      onChange={() => handleLocationSharingChange(key)}
                    />
                    <span className="text-gray-700">
                      {key.split(/(?=[A-Z])/).join(" ")}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Safety Resources Card */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md lg:col-span-2">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">
            Safety Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {safetyResources.map((resource) => (
              <div
                key={resource.title}
                className="border border-purple-200 rounded-lg p-4 hover:border-purple-400 transition"
              >
                <h3 className="font-medium text-purple-600 mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Schedule: {resource.schedule}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Location: {resource.location}
                </p>
                <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition shadow-md hover:shadow-lg">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Safety;
