import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface value {
    searchTerm: string,
    region: string
}

const initialState:value = {
    searchTerm: "",
    region: ""
}


const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    filterByRegion : (state, action: PayloadAction<string>) => {
      state.region = action.payload;
    },
    removeSearch: (state) => {
        state.searchTerm = ""
    }
  },
});

export const searchReducer = filterSlice.reducer;
export const { search, removeSearch, filterByRegion } = filterSlice.actions;