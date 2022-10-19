import { createSlice } from "@reduxjs/toolkit";




const countSlice = createSlice({
    name: "counter",
    initialState:{ count: 0, },
     reducers:{}
})

export default countSlice.reducer