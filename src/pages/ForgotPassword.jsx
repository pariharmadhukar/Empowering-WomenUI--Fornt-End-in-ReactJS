import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await axios.post('http://localhost:2810/EmPowerHer.com/n/user/forgot-password', {
        email,
      });

      setMessage(response.data.message || 'Password reset link sent to your email.');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to send reset link. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-xl mt-16"
    >
      <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">Forgot Your Password?</h1>
      <p className="text-gray-700 text-center mb-4">
        Enter your email address and we'll send you a link to reset your password.
      </p>

      {message && <p className="text-green-500 text-sm mb-4 text-center">{message}</p>}
      {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email Address
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-transform duration-300"
        >
          {loading ? 'Sending Link...' : 'Send Reset Link'}
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Remember your password?{' '}
        <Link to="/login" className="text-purple-600 hover:text-purple-500 font-medium">
          Log in
        </Link>
      </p>
    </motion.div>
  );
}

export default ForgotPassword;

