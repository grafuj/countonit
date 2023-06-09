import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchResults from "./_Search_results";


function Folders(props) {
  const { folders, departments, items } = props;
  const [formData, setFormData] = useState({
    name: "",
    quantity: null,
    price: null,
    minimumLevels: "",
    totalCost: "",
    description: "",
    folder_id: 1,
    department_id: null,
  });

  const departmentsView = function () {
    return props.departments.map((dep) => {
      const path = `/departments/${dep.id}`;
      const imgPath = `https://res.cloudinary.com/dmamz82ok/image/upload/v1679708114/truck_loid4r.webp`;
      return (
        <Link
          to={path}
          state={{ department: dep }}
          key={dep.id}
          className="single-dep"
        >
          <img className="depview" src={imgPath} alt="user-chosen department representation"></img>
          <div>{dep.name}</div>
        </Link>
      );
    });
  };

  return (
    <>
      <div className="folderView">
        <h1>All Items</h1>
        <span className="chevron">
          {/* <FontAwesomeIcon
            icon="fa-solid fa-chevron-right"
            size="2xl"
            style={{ color: "black" }}
          /> */}

          {/* <FontAwesomeIcon
            icon="fa-solid fa-chevron-right"
            size="2xl"
            style={{ color: "black" }}
          /> */}
        </span>
        <span>
          {/* {folders.map((folder) => (
            <h1 key={folder.id}>{folder.name}</h1>
          ))} */}
        </span>
      </div>
      <div className="departmentlist">{departmentsView()}</div>
      <div className="searchresults">
        <SearchResults
          formData={formData}
          items={items}
          departments={departments}
        />
      </div>
    </>
  );
}

export default Folders;
