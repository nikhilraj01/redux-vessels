import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../actions";
import { containers } from "../Info";

const ContainerTable = () => {
  const dispatch = useDispatch();
  const { selectedShip } = useSelector((state) => state.pageReducer);

  const addContainer = (e, id) => {
    //confirming container is not already added
    if (e.target.innerHTML !== "Added to ship") {
      //confirming whether can be added or not
      if (containers[id - 1].canBeAdded === true) {
        dispatch({
          type: actions.ADD_CONTAINER,
          payload: containers[id - 1],
          ship: selectedShip,
        });
        //modifying button on adding container
        e.target.innerHTML = "Added to ship";
        e.target.style.backgroundColor = "rgb(121, 121, 121)";
      }
      //displaying alert if container can't be added
      else if (containers[id - 1].canBeAdded === false) {
        window.alert("Can't be added");
      } else {
        window.alert("Select vessel before adding container");
      }
    } else {
      window.alert("Container already added");
    }
  };

  return (
    <div className="container-table">
      <h2>List of containers to be added:-</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Weight(in tons)</th>
            <th>Can be added?</th>
            <th style={{ width: "130px" }}>Reason</th>
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
  );
};

export default ContainerTable;
