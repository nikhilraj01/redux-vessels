import { containers, ships } from "../Info";

export const checkEligibility = (action, max) => {
  let shipType = ships[action.payload].name;

  containers.forEach((ele) => {
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
  return containers;
};

export const updateEligibility = (action, max) => {
  let shipType = action.ship.type;

  containers.forEach((ele) => {
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
  return containers;
};
