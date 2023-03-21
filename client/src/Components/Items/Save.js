import React, { useState } from 'react';

function SaveButton() {
  const [saved, setSaved] = useState(false);
  
  const handleSaveClick = () => {
    setSaved(true);
  };
  
  return (
    <div>
      <button onClick={handleSaveClick}>Save</button>
      {saved && <p>Item saved!</p>}
    </div>
  );
}

export default SaveButton;
