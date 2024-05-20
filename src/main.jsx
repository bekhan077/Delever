import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Aksiya from "./pages/Aksiya.jsx";
import Banner from "./pages/Banner.jsx";
import Otziv from "./pages/Otziv.jsx";
import Navbar from "./components/Navbar.jsx";
import Sitebar from "./components/Sitebar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="flex m-auto bg-[#dee7fe] w-full">
        <Sitebar />
        <div className="w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Aksiya />} />
            <Route path="/banner" element={<Banner />} />
            <Route path="/otziv" element={<Otziv />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
