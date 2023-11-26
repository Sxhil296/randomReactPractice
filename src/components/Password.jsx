import React, { useCallback, useEffect, useState } from "react";

const Password = () => {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (characters) str += "!@#$%^&*(){}+_-~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, characters]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, characters, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-center mb-2">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-y px-3"
            readOnly
            placeholder="password"
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={number}
              className="cursor-pointer"
              onChange={() => {
                setNumber(!number);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={characters}
              className="cursor-pointer"
              onChange={() => {
                setCharacters((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
