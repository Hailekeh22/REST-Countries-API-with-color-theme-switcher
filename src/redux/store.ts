import { configureStore} from "@reduxjs/toolkit";
import { countriesReducer } from "./reducers/DataSlice";
import { countryDataReducer } from "./reducers/countrySlice";
import { themeReducer } from "./reducers/themeSlice";


export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    countryInfo: countryDataReducer,
    theme:themeReducer
},
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

