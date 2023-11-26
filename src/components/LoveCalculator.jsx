import React, { useState } from "react";

const LoveCalculator = () => {
  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");
  const [score, setScore] = useState(null);

  const handleFnameChange = (e) => {
    setFname(e.target.value);
  };

  const handleSnameChange = (e) => {
    setSname(e.target.value);
  };

  const calculateScore = () => {
    if (fname.length > 0 && sname.length > 0) {
      // Convert names to lowercase and remove spaces
      const name1 = fname.toLowerCase().replace(/\s/g, "");
      const name2 = sname.toLowerCase().replace(/\s/g, "");

      // Calculate love score based on characters in names
      let combinedName = name1 + name2;
      let score = 0;

      for (let i = 0; i < combinedName.length; i++) {
        score += combinedName.charCodeAt(i);
      }

      // Scale the score to a percentage (0 - 100)
      score = score % 101;

      setScore(score);
    }
  };
  return (
    <>
      <h2>Love Calculator</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={fname}
        onChange={handleFnameChange}
      />
      <br />
      <input
        type="text"
        placeholder="Your partner Name"
        value={sname}
        onChange={handleSnameChange}
      />
      <br />
      <button onClick={calculateScore}>Calculate</button>
      <br />
      {score !== null && (
        <div>
          <h3>Love Score : {score}</h3>
        </div>
      )}
    </>
  );
};

export default LoveCalculator;
