import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome {username}!</h2>
          <button onClick={handleLoginLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={handleUsernameChange}
          />
          <button onClick={handleLoginLogout}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
