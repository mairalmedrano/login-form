import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform login authentication logic here
    if (username === 'john' && password === 'password123') {
      setLoggedIn(true);
    } else {
      console.log('Invalid username or password');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>Login successful</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
className='text-black'
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
className='text-black'
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
