import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaUnlockAlt } from 'react-icons/fa';

    function ChangePassword() {
      const [oldPassword, setOldPassword] = useState('');
      const [newPassword, setNewPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [message, setMessage] = useState('');
      const [error, setError] = useState('');
      const [loading, setLoading] = useState(false);

      const handleSubmit = async (e) => {
        e.preventDefault();

        if (!oldPassword || !newPassword || !confirmPassword) {
          setError('Please fill in all fields.');
          return;
        }

        if (newPassword !== confirmPassword) {
          setError('New passwords do not match.');
          return;
        }
        setLoading(true);
        setError('');
        setMessage('');

        // Simulate API call
        setTimeout(() => {
          setLoading(false);
          // Replace with actual API call and conditions
          if (oldPassword === 'oldpassword' && newPassword === 'newpassword') {
            setMessage('Password changed successfully!');
            setError('');
          } else {
            setError('Failed to change password. Please check your old password.');
            setMessage('');
          }
        }, 5000);
      };

      return (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-xl mt-16"
        >
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">Change Password</h1>

          {message && <p className="text-green-500 text-sm mb-4 text-center">{message}</p>}
          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="oldPassword" className="block text-gray-700 text-sm font-bold mb-2">
                Old Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  id="oldPassword"
                  placeholder="Old Password"
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2">
                New Password
              </label>
              <div className="relative">
                <FaUnlockAlt className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  id="newPassword"
                  placeholder="New Password"
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <FaUnlockAlt className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm New Password"
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-transform duration-300"
            >
              {loading ? 'Changing Password...' : 'Change Password'}
            </button>
          </form>
        </motion.div>
      );
    }


    export default ChangePassword;
