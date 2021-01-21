import { React, useEffect } from "react";
import SelectedVessel from "./components/SelectedVessel";
import ContainerTable from "./components/ContainerTable";
import ShipmentDetails from "./components/ShipmentDetails";

const Home = () => {
  useEffect(() => {
    document.title = "Manage Vessel";
  }, []);
  return (
    <div>
      <SelectedVessel />
      <ContainerTable />
      <ShipmentDetails />
    </div>
  );
};

export default Home;
