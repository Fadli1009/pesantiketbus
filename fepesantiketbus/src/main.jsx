import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import SentEmail from "./pages/SentEmail.jsx";

// Routes
import Register from "./pages/register.jsx";
import ProfileUser from "./pages/profileUser.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProfileUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sent-email" element={<SentEmail />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
