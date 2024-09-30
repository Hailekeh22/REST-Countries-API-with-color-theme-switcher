import { configureStore} from "@reduxjs/toolkit";
import countriesReducer from "./reducers/DataSlice";


export const store = configureStore({
    reducer:{
        countries:countriesReducer,
    }
})