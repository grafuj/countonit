import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Form from "./Form";
import Editmodal from "./edit-modal/Editmodal";
import DeleteButton from "./hooks/Delete";
import "./Form.css";

function Items(props) {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState({});
  const location = useLocation();

  const { items, departments } = props;

  // let item = "";
  // if (!location.state) {
  //   console.log(item);
  // } else {
  //   item = location.state.item;
  // }

  useEffect(() => {
    // console.log("location:", location);
    if (location.state?.item) {
      setItem(location.state.item);
    }
  }, []);

  return (
    <div className="item-view-container">
      <div>
        <h1 className="folderView">Item view</h1>
        <h3 className="item-view-details">Department</h3>
        <p className="item-view-values">{item.department_id}</p>
        <h3 className="item-view-details">Item Name</h3>
        <p className="item-view-values">{item.name}</p>
        <h3 className="item-view-details">Item Quantity</h3>
        <p className="item-view-values">{item.quantity}</p>
        <h3 className="item-view-details">Item Price</h3>
        <p className="item-view-values">${item.price_cents / 100}</p>
        <h3 className="item-view-details">Total Value</h3>
        <p className="item-view-values">
          ${(item.price_cents / 100) * item.quantity}
        </p>
        <h3 className="item-view-details">Item Minimum</h3>
        <p className="item-view-values">{item.minimum_level}</p>
        <h3 className="item-view-details">Item Notes</h3>
        <p className="item-view-details-notes">{item.description}</p>
        <div>
          <button className="item-edit-delete" onClick={() => setShow(true)}>
            Edit Item (fa_pencil icon?)
          </button>

          <DeleteButton
            className="item-edit-delete"
            itemId={item.id}
            departmentID={item.department_id}
          />
        </div>
      </div>
      <div>
        <img src={item.image} alt={item.description} />
      </div>
      <Editmodal onClose={() => setShow(false)} show={show}>
        <Form
          items={items}
          departments={departments}
          onClose={() => setShow(false)}
          setItem={setItem}
        />
      </Editmodal>
      <div className="delete-btn"></div>
    </div>
  );
}

export default Items;
