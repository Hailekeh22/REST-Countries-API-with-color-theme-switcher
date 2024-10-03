import { configureStore} from "@reduxjs/toolkit";
import { countriesReducer } from "./reducers/DataSlice";
import { countryDataReducer } from "./reducers/countrySlice";
import { themeReducer } from "./reducers/themeSlice";
import { borderReducer } from "./reducers/borderSlice";


export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    countryInfo: countryDataReducer,
    theme:themeReducer,
    border: borderReducer
},
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

