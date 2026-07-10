import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer, Slide } from "react-toastify";
import { AuthContextProvider } from "./context/AuthContext";
// import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    <ToastContainer
      position="bottom-right"
      autoClose={4985}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Slide}
    />
    {/* </BrowserRouter> */}
  </StrictMode>,
);
