import React, { useState, useContext } from "react";
import { CommentsContext } from "../../Contexts/CommentsContext";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { isAuthenticated, setAuthenticationStatus } =
    useContext(CommentsContext);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = formData;
    if (username == "admin" && password == "1234") {
      setAuthenticationStatus(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleInputChange}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login;
