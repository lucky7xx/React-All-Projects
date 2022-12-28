import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClickLogin = () => {
    if (!userName || !password) {
      alert("Please enter username and password.");
      return;
    }

    setTimeout(() => {
      if (userName === "lucky" && password === "123") {
        console.log("You're Admin man!");
        navigate("/admin");
      } else {
        console.log("You're Normal man!");
        navigate("/dashboard");
      }
    }, 1000);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleClickLogin}>Login</button>
    </div>
  );
};

export default Login;
