import React from "react";
import { useSelector } from "react-redux";

const ShipmentDetails = () => {
  const { totalSpace, availableSpace, currentShipment } = useSelector(
    (state) => state.pageReducer
  );

  return (
    <div className="shipment-details">
      <h2>Current Shipment:</h2>
      {currentShipment.length > 0
        ? currentShipment.map((ele, index) => (
            <li key={index}>
              <div>{"Container ID: " + ele.id} </div>
              <div>{"Container Weight: " + ele.weight + " Tons"}</div>
              <div>{"Contents: " + ele.contentType}</div>
            </li>
          ))
        : "Vessel is empty"}
      <hr />
      <h3>Total Weight: {totalSpace - availableSpace} Tons</h3>
    </div>
  );
};

export default ShipmentDetails;
