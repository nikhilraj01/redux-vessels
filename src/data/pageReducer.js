import actions from "./pageActions";
import { containers } from "../Info";

const initialState = {
  selectedShip: "",
  availableSpace: 0,
  totalSpace: 0,
  currentShipment: [],
  containers: containers,
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_VESSEL:
      return {
        ...state,
        selectedShip: action.payload.selectedShip,
        totalSpace: action.payload.totalSpace,
        availableSpace: action.payload.availableSpace,
        currentShipment: [],
      };
    case actions.UPDATE_SHIPMENT:
      return {
        ...state,
        currentShipment: action.payload.currentShipment,
        availableSpace: state.availableSpace - action.payload.weight,
      };
    default:
      return state;
  }
};

export default pageReducer;
