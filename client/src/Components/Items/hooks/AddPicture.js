import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UploadPicture({
  picture,
  setPicture,
  setFormData,
  originalPicture,
}) {
  const [preview, setPreview] = useState(null || picture);
  const handlePictureChange = (event) => {
    const selectedPicture = event.target.files[0];
    setPicture(selectedPicture);
    if (selectedPicture) {
      setPreview(URL.createObjectURL(selectedPicture));
    } else {
      setPreview(originalPicture);
    }
  };
  useEffect(() => {
    console.log({ picture, preview, originalPicture });
  }, [picture, preview]);
  return (
    <div>
      <input
        name="image"
        filename={picture}
        accept="image/*"
        type="file"
        onChange={handlePictureChange}
      />
      {preview && (
        <img
          src={preview}
          alt=" "
          style={{ width: "200px", height: "200px" }}
        />
      )}
      {!preview && (
        <span className="pic-icon">
          <FontAwesomeIcon
            icon="fa-solid fa-image"
            size="2xl"
            style={{ color: "#ffffff" }}
          />
        </span>
      )}
    </div>
  );
}
