import { put, takeLatest, all } from "redux-saga/effects";
import { ships } from "../Info";
import { checkEligibility, updateEligibility } from "../api/index";

import actions from "./pageActions";

let addedContainers = [];

function* _selectVessel(action) {
  const containers = checkEligibility(action, ships[action.payload].capacity);
  addedContainers = [];
  yield put({
    type: actions.SET_VESSEL,
    payload: {
      selectedShip: ships[action.payload].name,
      totalSpace: ships[action.payload].capacity,
      availableSpace: ships[action.payload].capacity,
      currentShipment: [],
      containers: containers,
    },
  });
}

function* _addContainer(action) {
  addedContainers.push(action.payload);
  const containers = updateEligibility(
    action,
    action.ship.availableSpace - action.payload.weight
  );
  yield put({
    type: actions.UPDATE_SHIPMENT,
    payload: {
      currentShipment: addedContainers,
      weight: action.payload.weight,
      containers: containers,
    },
  });
}

function* actionWatcher() {
  yield all([takeLatest(actions.SELECT_VESSEL, _selectVessel)]);
  yield all([takeLatest(actions.ADD_CONTAINER, _addContainer)]);
}

export default function* mySaga() {
  yield all([actionWatcher()]);
}
