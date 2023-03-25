import React from "react";

const Editmodal = (props) => {
  const { item, departments, onClose } = props;

  return (
    <div className={`modal ${props.show ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Edit Item</h3>
          {/* add {item.name} */}
        </div>
        <div className="modal-body">
          This is modal content, item name: chainsaw, quantitiy is 2
          {props.children}
        </div>
        <div className="modal-footer">
          <button className="button">Save</button>
          <button onClick={onClose} className="button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Editmodal;