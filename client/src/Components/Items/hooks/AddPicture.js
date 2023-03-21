import React, { useState } from 'react';


  const usePictureInput = () => {
    const [picture, setPicture] = useState(null);
  
    const handlePictureChange = event => {
      const file = event.target.files[0];
      setPicture(file);
    };
  
    return [picture, handlePictureChange];
  };

  const ImagePreview = ({ file }) => {
    if (!file) {
      return null;
    }

    const url = URL.createObjectURL(file);

    return (
      <div>
        <img src={url} alt="Preview" />
      </div>
    )
  }

export default usePictureInput;