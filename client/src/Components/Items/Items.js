import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Form from "./Form";
import Editmodal from "./edit-modal/Editmodal";
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
    console.log("location:", location)
    if (location.state?.item) {
      setItem(location.state.item)
    }
  }, [])

  return (
    <div>
      <h1>Item view</h1>
      <div>
        <img src={item.image} />
        <h3>Department</h3>
        <p>{item.department_id}</p>
        <h3>Item Name</h3>
        <p>{item.name}</p>
        <h3>Item Quantity</h3>
        <p>{item.quantity}</p>
        <h3>Item Price</h3>
        <p>{item.price_cents}</p>
        <h3>Item Minimum</h3>
        <p>{item.minimum_level}</p>
        <h3>Item Notes</h3>
        <p>{item.description}</p>
      </div>
      <button onClick={() => setShow(true)}>Show modal (Edit)</button>
      <Editmodal onClose={() => setShow(false)} show={show}>
        <Form items={items} departments={departments} onClose={() => setShow(false)} setItem={setItem} />
      </Editmodal>
    </div>
  );
}

export default Items;
