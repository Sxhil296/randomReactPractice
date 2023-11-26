import React from "react";
import Card from "./Card";

const Props = () => {
  return (
    <div className="flex justify-center items-center flex-row gap-2">
      <h1 className="bg-green-400 rounded-md p-4 mb-4">Props and TailwindCSS</h1>

      <Card username="Ruby" text="first lorem ipsum first" btnText="View Profile"/>
      <Card username="Shalu" text="second card lorem ipsum first" btnText="Subscribe" />
      <Card username={"Neena"}/>
    </div>
  );
};

export default Props;
