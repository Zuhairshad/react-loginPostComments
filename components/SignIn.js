import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ setSignedUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Simulate a sign-in success if the user entered the correct credentials
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail === email && storedPassword === password) {
      alert('Welcome!');
      setSignedUp(true); // Set signedUp state to true after successful sign-in
      navigate('/posts'); // Redirect to the Posts page after successful sign-in
    } else {
      alert('User not found. Please sign up or check your credentials.');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignIn}>Sign In</button>

      {/* Add a link to navigate to the Sign Up page */}
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
};

export default SignIn;
