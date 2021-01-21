import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../actions";

const SelectedVessel = () => {
  const dispatch = useDispatch();
  const { selectedShip, totalSpace, availableSpace } = useSelector(
    (state) => state.pageReducer
  );

  const selectVessel = (event) => {
    dispatch({ type: actions.SELECT_VESSEL, payload: event.target.value });
  };

  return (
    <div className="selected-vessel">
      <label>Select Vessel:</label>
      <select name="vessel" id="vessel" onChange={selectVessel}>
        <option value="0">--Choose from below--</option>
        <option value="1">Small</option>
        <option value="2">Medium</option>
        <option value="3">Large</option>
        <option value="4">Special</option>
      </select>
      <br />
      <h2>Selected Vessel: {selectedShip}</h2>
      <h3>Total Capacity (in tons): {totalSpace}</h3>
      <h3>Available Capacity (in tons): {availableSpace}</h3>
    </div>
  );
};

export default SelectedVessel;
