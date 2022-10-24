import React, { useState } from "react";

const Writter = () => {
  const [title, setTitle] = useState("");
  const [content, seContent] = useState("");
  const [color, setColor] = useState("#ffe9ee");

  return (
    <div className="contextbox">
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.currentTarget.value);
        }}
      />
      <textarea
        rows={8}
        placeholder="Description"
        onChange={(e) => {
          seContent(e.currentTarget.value);
        }}
      />
      <div className="controls">
        <div className="colors">
          <span className="c1" onClick={() => setColor("#D8E2DC")} />
          <span className="c2" onClick={() => setColor("#FFE5D9")} />
          <span className="c3" onClick={() => setColor("#FBFAF0")} />
          <span className="c4" onClick={() => setColor("#FFE9EE")} />
          <span className="c5" onClick={() => setColor("#FFDDE4")} />
        </div>
        <button>Add</button>
      </div>
    </div>
  );
};

export default Writter;
