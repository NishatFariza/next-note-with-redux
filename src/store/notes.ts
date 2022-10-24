import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteModel } from "../models/Note.model";

interface NoteState{
    notes: NoteModel[];
    filterMode: string;
}


const initialState: NoteState = {
    notes: [],
    filterMode: "all",
};


const noteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        removeNote(state, action: PayloadAction<{ id: string }>) {
            state.notes = state.notes.filter((note) => note.id !== action.payload.id)
        },

        addNote(state, action: PayloadAction<NoteModel>) {
            state.notes.unshift(action.payload)

            // return [action.payload, ...state.notes]
        },
        changeFilterMode(state, action: PayloadAction<{ filterMode: string }>) {
            state.filterMode = action.payload.filterMode;
        }
    }
})

export const { removeNote, addNote, changeFilterMode } = noteSlice.actions;

export default noteSlice.reducer;