import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../store/notes";

const Writter = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("#ffe9ee");


  const handleAddNote = () => {
    // console.log(title, content, color)
    dispatch(addNote({
      title,
      color,
      content,
      createAt: new Date().toLocaleString(),
      id: Date.now().toString(),
    }))
    
    setColor("");
    setTitle("");
    setContent

  }

  return (
    <div className="contextbox">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.currentTarget.value);
        }}
      />
      <textarea
        rows={8}
        placeholder="Description"
        value={content}
        onChange={(e) => {
          setContent(e.currentTarget.value);
        }}
      />
      <div className="controls">
        <div className="colors">
          <span
            className={`c1 ${color == "#D8E2DC" && "selected"}`}
            onClick={(e) => setColor("#D8E2DC")}
          />
          <span
            className={`c2 ${color == "#FFE5D9" && "selected"}`}
            onClick={() => setColor("#FFE5D9")}
          />
          <span
            className={`c3 ${color == "#FBFAF0" && "selected"}`}
            onClick={() => setColor("#FBFAF0")}
          />
          <span
            className={`c4 ${color == "#FFE9EE" && "selected"}`}
            onClick={() => setColor("#FFE9EE")}
          />
          <span
            className={`c5 ${color == "#FFDDE4" && "selected"}`}
            onClick={() => setColor("#FFDDE4")}
          />
        </div>
        <button onClick={handleAddNote}>Add</button>
      </div>
    </div>
  );
};

export default Writter;
