import React from "react";
import Form from "./Form";

function Items(props) {
  return (
    <div className="items-div">
      <h1>Item</h1>

      <Form items={props.items} departments={props.departments} />
    </div>
  );
}

export default Items;
