import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface value {
    searchTerm: string
}

const initialState:value = {
    searchTerm: ""
}


const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    removeSearch: (state) => {
        state.searchTerm = ""
    }
  },
});

export const searchReducer = filterSlice.reducer;
export const { search, removeSearch } = filterSlice.actions;