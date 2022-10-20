import { useSelector } from "react-redux";
import Filtter from "../components/Filtters";
import Note from "../components/Note";
import Writter from "../components/Writter";
import { NoteModel } from "../models/Note.model";
import Notes from "./store/notes";

// "#d8e2dc"
// "#ffe5d9"
// "#fbfaf0"
// "#ffe9ee"
// "#ffdde4"

const IndexPage = () => {
  const notes = useSelector((state: any) => state.notes.notes as NoteModel[]);

  return (
    <div className="app">
      <div className="header">
        <h1 className="app-title">Next Notes with Redux</h1>
      </div>
      <Writter />
      <Filtter />
      <div className="notes">
        {notes.map((note) => (
          <Note
            key={note.id}
            title={note.title}
            content={note.content}
            color={note.color}
            createAt={note.createAt}
            id={note.id}
          />
        ))}

        {/* <Note /> */}
      </div>
    </div>
  );
};

export default IndexPage;
