import { createSlice } from "@reduxjs/toolkit";


interface CounterState {
    count :number,
}


const countSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    } ,
    reducers: {
        increment(state: CounterState) {
            state.count +=1;
        },

        decrement(state: CounterState) {
            state.count -=1;
        }
     }
})


export const { increment, decrement } = countSlice.actions;

export default countSlice.reducer