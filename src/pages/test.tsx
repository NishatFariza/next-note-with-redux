import React from "react";
import { useSelector } from "react-redux";

const TestPage = () => {

  const counter = useSelector((store: any) => store.counter)

  return (
    <div>
      <button>-</button>
      <button>+</button>
      <h2>Count: { counter}</h2>
    </div>
  );
};

export default TestPage;
