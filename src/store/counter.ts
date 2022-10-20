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
        increment(state: CounterState, action: any) {
            // console.log(action);
            state.count += action.payload;
        },

        decrement(state: CounterState, action: any) {
           if(state.count > 0) state.count -=action.payload;
        }
     }
})


export const { increment, decrement } = countSlice.actions;

export default countSlice.reducer