import React from "react";
import Writter from "../components/Writter";
import Filtter from "../components/Filtters";
import Note from "../components/Note";

const index = () => {
  return (
    <div className="app">
      <div className="header">
        <h1 className="app-title">React Notes</h1>
      </div>
      <Writter />
      <Filtter />
      <div className="notes">
        <Note bgColor="#d8e2dc" />
        <Note bgColor="#ffe5d9" />
        <Note bgColor="#fbfaf0" />
        <Note bgColor="#ffe9ee" />
        <Note bgColor="#ffdde4" />
        <Note />
      </div>
    </div>
  );
};

export default index;
