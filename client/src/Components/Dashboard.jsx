import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dashboard(props) {
  const itemCount = props.items.length;
  const departmentsCount = props.departments.length;
  let qtyCount = 0;
  let totalValueCount = 0;
  const departmentInfo = {};
  const departmentNames = {};
  props.items.map((item) => {
    qtyCount += item.quantity;
    totalValueCount += Math.floor(item.price_cents * item.quantity);

    if (!departmentInfo[item.department_id]) {
      departmentInfo[item.department_id] = [item];
    } else {
      departmentInfo[item.department_id].push(item);
    }
    return undefined;
  });

  return (
    <section>
      <h3>Inventory Summary</h3>
      <div className="boxone">
        <div className="inventory">
          <table className="inventoryTable">
            <tbody>
              <tr className="summary-title">
                <td>Items:</td>
                <td>Folders:</td>
                <td>Quantity:</td>
                <td>Total Value:</td>
              </tr>
              <tr>
                <td>{itemCount}</td>
                <td>{departmentsCount}</td>
                <td>{qtyCount}</td>
                <td>${(totalValueCount / 100).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="new">
          <Link to="/items/new">
            <FontAwesomeIcon className="newlink" icon="fa-circle-plus" style={{color: "#ffffff",}}/>
          </Link>
          <div className="add-btn">Add New Item</div>
        </div>
        <div className="new">
          <Link to="/items/new">
            <FontAwesomeIcon className="newlink" icon="fa-circle-plus" style={{color: "#ffffff",}}/>
          </Link>
          <div className="add-btn">Add Folder</div>
        </div>
      </div>
      <div className="boxtwo">
        <div>
          <h3>Folders</h3>
          <div className="departments">
            {props.departments.map((department) => {
              departmentNames[department.id] = department.name;
              let total = 0;
              let value = 0;
              departmentInfo[department.id].map((dep) => {
                total += dep.quantity;
                value += dep.price_cents;
                return undefined;
              });
              const route = `/departments/${department.id}`;
              return (
                <Link
                  key={department.id}
                  className="department"
                  to={route}
                  state={{ department: department }}
                >
                  <span className="dep-name-dashboard">{department.name}:</span>
                  <table className="dep-details">
                    <tbody>
                      <tr>
                        <td>Items:</td>
                        <td>Total Quantity:</td>
                        <td>Total Value:</td>
                      </tr>
                      <tr>
                        <td>{departmentInfo[department.id].length}</td>
                        <td>{total}</td>
                        <td>${(value / 100).toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="boxthree">
        <div>
          <div className="stock-level-container">
            <h3>Stock Levels At or Below Min Level</h3>
            {props.items.some((item) => item.minimum_level > item.quantity) && (
              <div className="notify-container">
                <div className="icon-container">
                  <FontAwesomeIcon
                    icon="fa-solid fa-flag"
                    bounce
                    size="xl"
                    style={{ color: "#ff0000" }}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="minlevels">
            <table className="mintable">
              <tbody>
                <tr>
                  <td className="minitem-title">Item Name:</td>
                  <td className="itemvalue-title">Quantity:</td>
                  <td className="itemvalue-title">Price:</td>
                  <td className="itemvalue-title">Minimum Level:</td>
                  <td className="itemvalue-title">Folder:</td>
                </tr>
                {props.items.map((item) => {
                  return (
                    item.minimum_level > item.quantity && (
                      <tr key={item.id}>
                        <td className="minitem">{item.name}</td>
                        <td className="itemvalue">{item.quantity}</td>
                        <td className="itemvalue">${item.price_cents / 100}</td>
                        <td className="itemvalue">{item.minimum_level}</td>
                        <td className="itemvalue">
                          {departmentNames[item.department_id]}
                        </td>
                      </tr>
                    )
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
