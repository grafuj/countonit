import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Form from "./Form";
import Editmodal from "./edit-modal/Editmodal";
import DeleteButton from "./hooks/Delete";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Items(props) {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState({});
  const location = useLocation();

  const { items, departments } = props;

  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(`/departments`);
  };

  // let item = "";
  // if (!location.state) {
  //   console.log(item);
  // } else {
  //   item = location.state.item;
  // }

  useEffect(() => {
    if (location.state?.item) {
      setItem(location.state.item);
    }
  }, []);
  let folderName = "";
  departments.map((i) => {
    if (i.id === item.department_id) {
      folderName = i.name;
    }
  });
  console.log("ITEMMMMMM", item);
  console.log("DEPARTMENTS", departments);
  return (
    <div className="item-view-container">
      <div>
        <button type="submit" className="back-btn" onClick={handleBackButton}>
          <FontAwesomeIcon
            icon="fa-solid fa-circle-arrow-left"
            size="xl"
            style={{ color: "#ffffff" }}
          />
        </button>
        <div>
          <h1 className="folderView">Item view</h1>
          <section className="item-detail-container">
            <section>
              <h3 className="item-view-details">Folder</h3>
              <p className="item-view-values">{folderName}</p>
              <h3 className="item-view-details">Item Name:</h3>
              <p className="item-view-values">{item.name}</p>
              <h3 className="item-view-details">Item Quantity:</h3>
              <p className="item-view-values">{item.quantity}</p>
              <h3 className="item-view-details">Item Price:</h3>
              <p className="item-view-values">
                ${(item.price_cents / 100).toFixed(2)}
              </p>
            </section>
            <section>
              <h3 className="item-view-details">Total Value:</h3>
              <p className="item-view-values">
                ${((item.price_cents / 100) * item.quantity).toFixed(2)}
              </p>
              <h3 className="item-view-details">Item Minimum:</h3>
              <p className="item-view-values">{item.minimum_level}</p>
              <h3 className="item-view-details">Item Notes:</h3>
              <p className="item-view-details-notes">{item.description}</p>
            </section>
          </section>
        </div>
        <div className="edit-delete-buttons">
          <button
            type="button"
            className="delete-icon"
            onClick={() => setShow(true)}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-pen-to-square"
              size="2xl"
              style={{ color: "#ffffff" }}
            />
          </button>

          <DeleteButton
            className="delete-btn"
            itemId={item.id}
            itemName={item.name}
            departmentID={item.department_id}
          />
        </div>
      </div>
      <div>
        <img
          className="item-view-pic"
          src={item.image}
          alt={item.description}
        />
      </div>
      <Editmodal onClose={() => setShow(false)} show={show}>
        <Form
          items={items}
          departments={departments}
          onClose={() => setShow(false)}
          setItem={setItem}
        />
      </Editmodal>
    </div>
  );
}

export default Items;
