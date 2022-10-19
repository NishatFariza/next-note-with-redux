import { configureStore } from "@reduxjs/toolkit"
import counter from "./counter"


const store = configureStore({

    reducer: {
        counter,
    },
    devTools: process.env.NODE_ENV !== "production"
});


export default store;