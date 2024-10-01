import { configureStore} from "@reduxjs/toolkit";
import { countriesReducer } from "./reducers/DataSlice";
import { countryDataReducer } from "./reducers/countrySlice";


export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    countryInfo: countryDataReducer
},
});