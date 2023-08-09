import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${username}`
      );
      const data = await response.json();

      if (data.results.length > 0 && data.results[0].birth_year === password) {
        history.push("/planet");
      } else {
        setError("Invalid login credentials");
      }
    } catch (error) {
      setError("An error occurred while logging in");
    }
  };

  return (
    <div>
      <h1>Login</h1>
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
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginPage;
