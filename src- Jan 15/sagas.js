import { put, takeLatest, all } from "redux-saga/effects";

import actions from "./actions";

function* _selectVessel(action) {
  console.log("Vessel selection");
}

function* _addContainer(action) {
  console.log("Container addition");
}

function* actionWatcher() {
  yield all([takeLatest(actions.SELECT_VESSEL, _selectVessel)]);
  yield all([takeLatest(actions.ADD_CONTAINER, _addContainer)]);
}

export default function* mySaga() {
  yield all([actionWatcher()]);
}
