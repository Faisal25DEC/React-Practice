import { createContext, useState } from "react";

export const CommentsContext = createContext({
  comments: [],
  isAuthenticated: false,
});

export const CommentsContextProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [isAuthenticated, setAuthenticationStatus] = useState(false);
  const value = {
    comments,
    setComments,
    isAuthenticated,
    setAuthenticationStatus,
  };
  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  );
};
