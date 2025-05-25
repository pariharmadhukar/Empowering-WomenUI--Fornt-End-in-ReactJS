import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash, FaUserCircle } from 'react-icons/fa';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [Data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Data.name || !Data.email || !Data.password || !Data.confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (Data.password !== Data.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:2810/EmPowerHer.com/n/user/signup', Data); 
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        setData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        navigate('/');
      } else {
        setError(response.data.message || 'Invalid Signup credentials.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }

  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full max-w-5xl flex shadow-xl rounded-lg overflow-hidden bg-white mt-3"
    >
      {/* Left Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Create an Account</h1>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={Data.name}
                onChange={(e) => setData({ ...Data, name: e.target.value })}
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={Data.email}
                onChange={(e) => setData({ ...Data, email: e.target.value })}
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={Data.password}
                onChange={(e) => setData({ ...Data, password: e.target.value })}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle Password Visibility"
              >
                {showPassword ? <FaEyeSlash className="h-5 w-5 text-gray-400" /> : <FaEye className="h-5 w-5 text-gray-400" />}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={Data.confirmPassword}
                onChange={(e) => setData({ ...Data, confirmPassword: e.target.value })}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label="Toggle Confirm Password Visibility"
              >
                {showConfirmPassword ? <FaEyeSlash className="h-5 w-5 text-gray-400" /> : <FaEye className="h-5 w-5 text-gray-400" />}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-transform duration-300"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-600 hover:text-purple-500 font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Branding Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-600 to-pink-500 items-center justify-center p-12"
      >
        <div className="max-w-md text-center text-white">
          <FaUserCircle className="text-white w-20 h-20 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">
            Empower<span className="text-purple-200">Her</span>
          </h1>
          <p className="text-lg text-purple-100 mt-4">
            Join our community of strong, supportive women making positive changes in the world.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-6">
            {['Learn', 'Connect', 'Grow'].map((text, index) => (
              <div key={index} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold">{text}</h3>
                <p className="text-sm text-purple-100">{index === 0 ? 'Access resources' : index === 1 ? 'Build network' : 'Achieve goals'}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Signup;
