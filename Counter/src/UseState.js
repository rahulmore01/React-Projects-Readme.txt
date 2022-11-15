import React, { useState } from "react";

function UseState() {
    const[text,setText]=useState(0);

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="bg-yellow-100 p-5  ">
        <h1 className="text-3xl">
          Experience The Counter Using React UseState Hook!!!
        </h1>
        <div>
        <h1 className="flex m-10 justify-center">{text}</h1>
        </div>

        <div className="m-10 space-x-10 flex justify-around">
          <button onClick={()=>{setText(text+1)}}>increment</button>
          <button onClick={()=>{setText(text-1)}}>decrement</button>
          <button onClick={()=>{setText(0)}}>reset</button>
        </div>
      </div>
    </div>
  );
}

export default UseState;
