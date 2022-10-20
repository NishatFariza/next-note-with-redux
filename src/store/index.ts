import { configureStore } from "@reduxjs/toolkit"
import counter from "./counter"
import notes from "./notes"


const store = configureStore({

    reducer: {
        counter,
        notes,
    },
    devTools: process.env.NODE_ENV !== "production"
});


export default store;