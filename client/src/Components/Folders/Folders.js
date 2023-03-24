import React, { useState } from 'react';
import SearchResults from './_Search_results';
import { Link } from 'react-router-dom';

function Folders(props) {
  const { folders, departments, items } = props;
  const [formData, setFormData] = useState({
    name: "",
    quantity: null,
    price: null,
    minimumLevels: "",
    totalCost: "",
    description: "",
    // need to make dynamic
    folder_id: 1,
    department_id: null,
  });

  return (
    <>
      <div>
        <h1>Folders</h1>
        <span>{folders.map(folder => <p>{folder.name}</p>)}
        </span>
      </div>
      <div>
      <Link to= "/departments">Go to Departments</Link>
      </div>
      <div>
        <SearchResults formData={formData} items={items} departments={departments} />
      </div>
  
    </>
  );
}

export default Folders;
