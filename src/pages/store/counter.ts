import { createSlice } from "@reduxjs/toolkit";




const countSlice = createSlice({
    name: "counter",
    initialState: 0 ,
    reducers: {
        increment(state: number) {
            state++;
        },

        decrement(state: number) {
            state--;
        }
     }
})

export default countSlice.reducer