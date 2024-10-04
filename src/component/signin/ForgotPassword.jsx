import React, { useState } from 'react';
import authService from '../../appwrite/auth'; // Import your service

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await authService.forgotPassword(email);
      setMessage('Password reset link sent to your email.');
    } catch (error) {
      setMessage('Failed to send reset link.');
    }
  };

  return (
    <div className='text-center' onClick={handleForgotPassword}>
      {/* <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      /> */}
      <button className='text-red-500' type="submit">Forgot Password</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
