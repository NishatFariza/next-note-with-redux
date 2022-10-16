import React from "react";

const Note = ({ bgColor = "#fff" }) => {
  return (
    <div className="note" style={{ backgroundColor: bgColor }}>
      <div>
        <h3 className="title">Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          dolorem ea fugiat ad maiores distinctio impedit dignissimos possimus
          blanditiis veritatis eligendi earum dolorum commodi quasi quam a,
          incidunt illo. Illum.
        </p>
      </div>
      <p className="time">5 minutes ago</p>
      <div className="buttons">
        <button className="delete">&times;</button>
      </div>
    </div>
  );
};

export default Note;
