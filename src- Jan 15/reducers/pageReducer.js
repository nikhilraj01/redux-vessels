import actions from "../actions";
import { containers, ships } from "../Info";

const initialState = {
  selectedShip: "",
  availableSpace: 0,
  totalSpace: 0,
  currentShipment: [],
};

const addedContainers = [];

const pageReducer = (state = initialState, action) => {
  const canBeAdded = (arr, max) => {
    let shipType = "";

    if (action.ship) {
      shipType = action.ship;
    } else {
      shipType = ships[action.payload].name;
    }

    arr.forEach((ele) => {
      if (ele.weight <= max) {
        if (ele.category !== "refrigerated") {
          containers[ele.id - 1].canBeAdded = true;
          containers[ele.id - 1].reason = "-";
        } else {
          if (shipType === "Special") {
            containers[ele.id - 1].canBeAdded = true;
            containers[ele.id - 1].reason = "-";
          } else {
            containers[ele.id - 1].canBeAdded = false;
            containers[ele.id - 1].reason = "Need Special Vessel";
          }
        }
      } else {
        containers[ele.id - 1].canBeAdded = false;
        containers[ele.id - 1].reason = "Not Enough Space";
      }
    });
  };

  switch (action.type) {
    case actions.SELECT_VESSEL:
      canBeAdded(containers, ships[action.payload].capacity);
      return {
        ...state,
        selectedShip: ships[action.payload].name,
        totalSpace: ships[action.payload].capacity,
        availableSpace: ships[action.payload].capacity,
        currentShipment: [],
      };

    case actions.ADD_CONTAINER:
      addedContainers.push(action.payload);
      canBeAdded(containers, state.availableSpace - action.payload.weight);
      return {
        ...state,
        currentShipment: addedContainers,
        availableSpace: state.availableSpace - action.payload.weight,
      };

    default:
      return state;
  }
};

export default pageReducer;
