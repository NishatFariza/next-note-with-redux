import React from "react";


interface Props{
  title: string;
  content: string;
  color: string;
  createAt: string;
}


const Note: React.FC<Props> = ({ title, content, color, createAt }) => {
  return (
    <div className="note" style={{ backgroundColor: color }}>
      <div>
        <h3 className="title">{ title}</h3>
        <p>{ content}</p>
      </div>
      <p className="time">{ createAt}</p>
      <div className="buttons">
        <button className="delete">&times;</button>
      </div>
    </div>
  );
};

export default Note;
