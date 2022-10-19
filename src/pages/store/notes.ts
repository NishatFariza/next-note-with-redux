import { createSlice } from "@reduxjs/toolkit";
import { NoteModel } from "../../models/Note.model";

interface NoteState{
    notes: NoteModel[];
}


const initialState: NoteState = {
    notes: [],
};


createSlice({
    name: "notes",
    initialState,
    reducers: {
        
    }
})