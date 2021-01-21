import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../data/pageActions";
import { containers } from "../Info";

const Button = (props) => {
  const dispatch = useDispatch();
  const { selectedShip, availableSpace, currentShipment } = useSelector(
    (state) => state.pageReducer
  );

  const addContainer = (element) => {
    if (selectedShip.length == 0) {
      window.alert("Select vessel before adding container");
    } else if (
      currentShipment.findIndex((ele) => ele.id === element.id) === -1
    ) {
      if (containers[element.id - 1].canBeAdded === true) {
        dispatch({
          type: actions.ADD_CONTAINER,
          payload: containers[element.id - 1],
          ship: { type: selectedShip, availableSpace: availableSpace },
        });
      } else {
        window.alert("Can't be added");
      }
    } else if (
      currentShipment.findIndex((ele) => ele.id === element.id) !== -1
    ) {
      window.alert("Container already added");
    }
  };
  return (
    <div>
      <button onClick={() => addContainer(props.element)}>
        {!props.element.canBeAdded ? "Can't be added" : "Add"}
      </button>
    </div>
  );
};

export default Button;
