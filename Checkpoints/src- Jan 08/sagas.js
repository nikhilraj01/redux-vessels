import { put, takeLatest } from "redux-saga/effects";

import actions from "./actions";

function* actionWatcher(action) {
  try {
    yield put({ type: actions.SELECT_VESSEL });
  } catch (e) {
    yield put({
      type: actions.RECEIVE_HELLO_WORLD,
      text: "Hello World from Saga",
    });
  }
}

export default function* mySaga() {
  yield takeLatest(actions.SELECT_VESSEL, actionWatcher);
}
