import { createSlice } from "@reduxjs/toolkit";
import { NoteModel } from "../../models/Note.model";

interface NoteState{
    notes: NoteModel[];
}


const initialState: NoteState = {
    notes: [
        {
        id: "1",
        title: "Note 1",
        content: "Content 1",
        createAt: "2022-01-01",
        color: "red"
        },
        {
        id: "2",
        title: "Note 2",
        content: "Content 2",
        createAt: "2022-01-02",
        color: "green"
        },
        {
        id: "3",
        title: "Note 3",
        content: "Content 3",
        createAt: "2022-01-03",
        color: "blue"
        },
        {
        id: "4",
        title: "Note 4",
        content: "Content 4",
        createAt: "2022-01-04",
        color: "teal"
        }
    ],
};


const noteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        
    }
})


export default noteSlice.reducer;