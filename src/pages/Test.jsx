import { useState } from "react";

const Test = () => {
  // ?   Value, Function
  // const [count, setCount] = useState(0);

  // const handleSubtract = () => setCount(count - 1);

  // const isMorning = true;

  const [text, setText] = useState();

  return (
    <div>
      {/* <div className="flex space-x-10">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 cursor-pointer"
        >
          Add
        </button>

        <h1>Click count: {count}</h1>

        <button
          onClick={handleSubtract}
          className="px-4 py-2 bg-red-500 cursor-pointer"
        >
          Substract
        </button>
      </div> */}

      {/* <div>
        <h1 className={`text-lg ${isMorning ? "text-blue-400" : "" }`}>
          {isMorning ? "Morning" : "Afternoon"}
        </h1>
      </div> */}

      {/* <div className="flex space-x-10 items-center">
        <button
          onClick={() => setText("text-red-500")}
          className="p-2 bg-green-400"
        >
          Red
        </button>

        <p className={text}>B sl o</p>

        <button
          onClick={() => setText("text-blue-500")}
          className="p-2 bg-green-400"
        >
          Blue
        </button>
      </div> */}
    </div>
  );
};

export default Test;
