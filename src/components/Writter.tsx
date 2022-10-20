import React, { useState } from "react";

const Writter = () => {


  const [title, setTitle] = useState("");
  const [content, seContent] = useState("")
  const [color, setColor] = useState("#ffe9ee");

  return (
    <div className="contextbox">
      <input type="text" placeholder="Title" />
      <textarea rows={8} placeholder="Description" />
      <div className="controls">
        <div className="colors">
          <span className="c1" data-note-color="#D8E2DC" />
          <span className="c2" data-note-color="#FFE5D9" />
          <span className="c3" data-note-color="#FBFAF0" />
          <span className="c4" data-note-color="#FFE9EE" />
          <span className="c5" data-note-color="#FFDDE4" />
        </div>
        <button>Add</button>
      </div>
    </div>
  );
};

export default Writter;
