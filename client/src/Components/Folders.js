import React, { useState, useEffect } from 'react';

function Folders(props) {
  const {folders} = props;
  return (
    <div>
      <h1>Folders</h1>
      <a href="http://localhost:3000/departments">Departments </a>
      <a href="http://localhost:3000/items">Items </a>
      <a href="http://localhost:3000/folders">Folders </a>
      <span>{folders.map(folder => {
        return (
          <>
          <p>{folder.name}</p>
          </>
          )
        }
      )
    }</span>
    </div>
  );
}

export default Folders;
