import React from "react";
import SelectedVessel from "./components/SelectedVessel";
import ContainerTable from "./components/ContainerTable";
import ShipmentDetails from "./components/ShipmentDetails";

const Home = () => {
  return (
    <div>
      <SelectedVessel />
      <ContainerTable />
      <ShipmentDetails />
    </div>
  );
};

export default Home;
