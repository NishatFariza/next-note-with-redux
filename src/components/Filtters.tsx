import React from "react";
import { useDispatch } from "react-redux";
import { changeFilterMode } from "../store/notes";

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <button onClick={() => dispatch(changeFilterMode({ filterMode: "all" }))}>
        All (8)
      </button>
      <button
        onClick={() => dispatch(changeFilterMode({ filterMode: "#D8E2DC" }))}
        style={{ backgroundColor: "#D8E2DC" }}
      >
        4
      </button>
      <button
        onClick={() => dispatch(changeFilterMode({ filterMode: "#FFE5D9" }))}
        style={{ backgroundColor: "#FFE5D9" }}
      >
        4
      </button>
      <button
        onClick={() => dispatch(changeFilterMode({ filterMode: "#FBFAF0" }))}
        style={{ backgroundColor: "#FBFAF0" }}
      >
        4
      </button>
      <button
        onClick={() => dispatch(changeFilterMode({ filterMode: "#FFE9EE" }))}
        style={{ backgroundColor: "#FFE9EE" }}
      >
        4
      </button>
      <button
        onClick={() => dispatch(changeFilterMode({ filterMode: "#FFDDE4" }))}
        style={{ backgroundColor: "#FFDDE4" }}
      >
        4
      </button>
    </div>
  );
};

export default Filters;
