import Dashboard from "./Components/dashboard/Dashboard";
import Login from "./Components/login/Login";
import { useState, useContext } from "react";
import { CommentsContext } from "./Contexts/CommentsContext";

const App = () => {
  const { isAuthenticated, setAuthenticationStatus } =
    useContext(CommentsContext);
  console.log(isAuthenticated);
  return (
    <div className="App">{!isAuthenticated ? <Login /> : <Dashboard />}</div>
  );
};

export default App;
