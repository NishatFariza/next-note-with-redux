import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NoteModel } from "../models/Note.model";
import { changeFilterMode } from "../store/notes";

const Filters = () => {
  const dispatch = useDispatch();
  const allCount = useSelector((state: any) => state.notes.notes.length as number);


  const color1Count = useSelector(
    (state: any) =>
      state.notes.notes.filter((note: NoteModel) => (note.color == "#D8E2DC"))
        .length
  );
  const color2Count = useSelector(
    (state: any) =>
      state.notes.notes.filter((note: NoteModel) => (note.color == "#FFE5D9"))
        .length
  );
  const color3Count = useSelector(
    (state: any) =>
      state.notes.notes.filter((note: NoteModel) => (note.color == "#FBFAF0"))
        .length
  );
  const color4Count = useSelector(
    (state: any) =>
      state.notes.notes.filter((note: NoteModel) => (note.color == "#FFE9EE"))
        .length
  );
  const color5Count = useSelector(
    (state: any) =>
      state.notes.notes.filter((note: NoteModel) => (note.color == "#FFDDE4"))
        .length
  );

  return (
    <div className="filter">
      <button onClick={() => dispatch(changeFilterMode({ filterMode: "all" }))}>
        All ({allCount})
      </button>
      <button
        onClick={() => dispatch(changeFilterMode({ filterMode: "#D8E2DC" }))}
        style={{ backgroundColor: "#D8E2DC" }}
      >
        {color1Count}
      </button>
      <button
        onClick={() => dispatch(changeFilterMode({ filterMode: "#FFE5D9" }))}
        style={{ backgroundColor: "#FFE5D9" }}
      >
        {color2Count}
      </button>
      <button
        onClick={() => dispatch(changeFilterMode({ filterMode: "#FBFAF0" }))}
        style={{ backgroundColor: "#FBFAF0" }}
      >
        {color3Count}
      </button>
      <button
        onClick={() => dispatch(changeFilterMode({ filterMode: "#FFE9EE" }))}
        style={{ backgroundColor: "#FFE9EE" }}
      >
        {color4Count}
      </button>
      <button
        onClick={() => dispatch(changeFilterMode({ filterMode: "#FFDDE4" }))}
        style={{ backgroundColor: "#FFDDE4" }}
      >
        {color5Count}
      </button>
    </div>
  );
};

export default Filters;
