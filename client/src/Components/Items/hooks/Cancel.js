import React from "react";
import { useNavigate } from "react-router-dom";

function CancelButton() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <button type="submit" onClick={handleCancel}>
      Cancel
    </button>
  );
}

export default CancelButton;
