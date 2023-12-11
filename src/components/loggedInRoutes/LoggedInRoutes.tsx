import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
function LoggedInRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default LoggedInRoutes;
