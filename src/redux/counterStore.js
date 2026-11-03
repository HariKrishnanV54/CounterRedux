import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/CounterSlice";

const counterStore = configureStore({
    reducer: {
        counterReducer : counterSlice
    }
})

export default counterStore;