import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/counter";

const TestPage = () => {
  const counter = useSelector((store: any) => store.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      <h2>Count: {counter}</h2>
    </div>
  );
};

export default TestPage;
