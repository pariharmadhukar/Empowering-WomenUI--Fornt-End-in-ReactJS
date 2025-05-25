import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {  FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUserCircle } from 'react-icons/fa';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [Data, setData] = useState({ email: '', password: '' });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Data.email || !Data.password) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:2810/EmPowerHer.com/n/user/login', Data); 
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        setData({ email: '', password: '' });
        navigate('/');
      } else {
        setError(response.data.message || 'Invalid login credentials.');
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
      className="w-full max-w-5xl flex shadow-xl rounded-lg overflow-hidden bg-white mt-5"
    >
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Log in to your Account</h1>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
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

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 border-gray-300 rounded"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-purple-600 hover:text-purple-500">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-transform duration-300"
            >
              {loading ? 'Logging in...' : 'Log in'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-purple-600 hover:text-purple-500 font-medium">
              Create an account
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Info Section */}
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

export default Login;
