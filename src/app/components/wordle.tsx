"use client";

import { useState, useEffect } from "react";
import { Keyboard } from "./Keyboard";

export const Wordle = () => {
  const title = ["©Snowchild", "Wordle"];
  const wordArray = ["DREAM"];
  const [FIRST, setFIRST] = useState(["", "", "", "", ""]);

  const handleClick = (item: string) => {
    FIRST[0] === ""
      ? setFIRST([item, "", "", "", ""])
      : FIRST[1] === ""
      ? setFIRST([FIRST[0], item, "", "", ""])
      : FIRST[2] === ""
      ? setFIRST([FIRST[0], FIRST[1], item, "", ""])
      : FIRST[3] === ""
      ? setFIRST([FIRST[0], FIRST[1], FIRST[2], item, ""])
      : FIRST[4] === ""
      ? setFIRST([FIRST[0], FIRST[1], FIRST[2], FIRST[3], item])
      : "";
  };

  return (
    <>
      <div className="flex flex-row gap-x-1 p-4 border-b-2 border-slate-400 justify-center bg-slate-700 text-white">
        <span className="text-3xl text-slate-200">{title[1]}</span>
        <span className="text-md text-slate-300">{title[0]}</span>
      </div>
      <div className="flex flex-row gap-x-1">
        {FIRST.map((item, key) => (
          <span
            className="border-4 border-slate-800 w-14 h-14 flex justify-center items-center text-2xl text-white"
            key={key}
          >
            {item}
          </span>
        ))}
      </div>

      <Keyboard sendToWordle={handleClick} />
    </>
  );
};
