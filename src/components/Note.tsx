import React from "react";
import { useDispatch } from "react-redux";
import { removeNote } from "../store/notes";

interface Props {
  id: string;
  title: string;
  content: string;
  color: string;
  createAt: string;
}

const Note: React.FC<Props> = ({ title, content, color, createAt, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="note" style={{ backgroundColor: color }}>
      <div>
        <h3 className="title">{title}</h3>
        <p>{content}</p>
      </div>
      <p className="time">{createAt}</p>
      <div className="buttons">
        <button
          onClick={() => dispatch(removeNote({ id: id }))}
          className="delete"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Note;
