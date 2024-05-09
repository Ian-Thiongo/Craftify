import React, { useState } from 'react';
import './styles.css';

function Form({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onLogin(username);
    setSubmitted(true);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="body-container">
      <form className="form-container" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {submitted && (
        <div>
          <p>Details submitted:</p>
          <p>Username: {username}</p>
        </div>
      )}
    </div>
  );
}

export default Form;

