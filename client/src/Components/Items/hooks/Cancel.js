import React from "react";
// import { useNavigate } from "react-router-dom";

function CancelButton(props) {
  const { onClose } = props;
  // const navigate = useNavigate();

  // const handleCancel = () => {
  //   navigate("/dashboard");
  // };

  return (
    <button type="button" onClick={onClose}>
      Cancel
    </button>
  );
}

export default CancelButton;
