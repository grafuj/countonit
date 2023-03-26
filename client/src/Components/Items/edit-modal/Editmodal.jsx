import React from "react";

const Editmodal = (props) => {
  const { onClose } = props;

  return (
    <div className={`modal ${props.show ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Edit Item</h3>
        </div>
        <div className="modal-body">
          {/* This is modal content, item name: blah blah */}
          {props.children}
        </div>
        <div className="modal-footer">
          {/* <button className="button">Save</button> */}
          {/* <button onClick={onClose} className="button">Close</button> */}
        </div>
      </div>
    </div>
  );
};

export default Editmodal;