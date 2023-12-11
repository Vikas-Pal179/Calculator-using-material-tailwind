import React from "react";
import { useNavigate } from "react-router";

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Navigate to HomePage</button>
    </div>
  );
}

export default AboutPage;
