import React from "react";
import { containers } from "../Info";
import Button from "./Button";

const ContainerTable = () => {
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
                  <Button element={element} />
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
