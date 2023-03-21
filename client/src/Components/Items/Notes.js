import React, { useState } from 'react';

export default function NotesInput() {
  const [notes, setNotes] = useState("");

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  }

  return (
    <div>
      <label htmlFor='notes'>Notes:</label>
      <textarea 
      id="notes"
      name="notes"
      value={notes}
      onChange={handleNotesChange}
      />
    </div>
  )
}