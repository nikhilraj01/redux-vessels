import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "./actions";
import { containers } from "./ShipmentDetails";

const Home = () => {
  const dispatch = useDispatch();
  const {
    selectedShip,
    totalSpace,
    availableSpace,
    currentShipment,
  } = useSelector((state) => state.helloWorld);
  const selectVessel = (event) => {
    dispatch({ type: actions.SELECT_VESSEL, payload: event.target.value });
  };

  const addContainer = (e, id) => {
    if (e.target.innerHTML !== "Added to ship") {
      if (containers[id - 1].canBeAdded === true) {
        dispatch({
          type: actions.ADD_CONTAINER,
          payload: containers[id - 1],
          ship: selectedShip,
        });
        e.target.innerHTML = "Added to ship";
        e.target.style.backgroundColor = "rgb(121, 121, 121)";
      } else if (containers[id - 1].canBeAdded === false) {
        window.alert("Can't be added");
      } else {
        window.alert("Select vessel before adding container");
      }
    } else {
      window.alert("Container already added");
    }
  };
  return (
    <div>
      <label>Select Vessel:</label>
      <select name="vessel" id="vessel" onChange={selectVessel}>
        <option value="0">--Choose from below--</option>
        <option value="1">Small</option>
        <option value="2">Medium</option>
        <option value="3">Large</option>
        <option value="4">Special</option>
      </select>
      <br />
      <div className="selected-vessel">
        <h2>Selected Vessel: {selectedShip}</h2>
        <h3>Total Capacity (in tons): {totalSpace}</h3>
        <h3>Available Capacity (in tons): {availableSpace}</h3>
      </div>

      <div className="container-table">
        <h2>List of containers to be added:-</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Weight</th>
              <th>Can be added?</th>
              <th style={{ width: "180px" }}>Reason</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {containers.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.id}</td>
                  <td>{element.category}</td>
                  <td>{element.weight}</td>
                  <td>
                    {element.canBeAdded === undefined
                      ? "-"
                      : element.canBeAdded === true
                      ? "yes"
                      : "no"}
                  </td>
                  <td>{element.reason === undefined ? "-" : element.reason}</td>
                  <td>
                    <button onClick={(e) => addContainer(e, element.id)}>
                      Add to ship
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="shipment-details">
        <h2>Current Shipment:</h2>
        {currentShipment.length > 0
          ? currentShipment.map((ele) => (
              <li>
                <div>{"Container ID: " + ele.id} </div>
                <div>{"Container Weight: " + ele.weight + " Tons"}</div>
                <div>{"Contents: " + ele.contentType}</div>
              </li>
            ))
          : "Vessel is empty"}
        <hr />
        <h3>Total Weight: {totalSpace - availableSpace} Tons</h3>
      </div>
    </div>
  );
};

export default Home;
