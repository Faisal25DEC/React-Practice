import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { CommentsContextProvider } from "./Contexts/CommentsContext";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <CommentsContextProvider>
    <App />
  </CommentsContextProvider>
);
