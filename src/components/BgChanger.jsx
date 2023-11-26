import React, { useState } from "react";

const BgChanger = () => {
  const [color, setColor] = useState("gray");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed bottom-10 justify-center inset-x-0 px-2 flex flex-wrap">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-md">
          <button
            className="outline-none px-4"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            green
          </button>
          <button
            className="outline-none px-4"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
