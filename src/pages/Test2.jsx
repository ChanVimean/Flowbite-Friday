import React, { useState } from "react";

const Test2 = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button
        onClick={() => setShow(!show)}
        className="px-2 py-1 bg-sky-500 rounded shadow cursor-pointer"
      >
        {show ? "Hide Message" : "Show Message"}
      </button>

      <p>{show ? "This is message" : ""}</p>
    </div>
  );
};

export default Test2;
