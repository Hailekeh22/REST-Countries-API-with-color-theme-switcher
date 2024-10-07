import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface dataValue {
  borderData: any[];
  fetchingBorders: boolean;
  error: boolean;
}

const initialState: dataValue = {
  borderData: [], 
  fetchingBorders: false,
  error: false,
};

export const fetchBorders = createAsyncThunk(
  "borderdata",
  async (value: string, { dispatch }) => {
    if (!value) {
      dispatch(noBorder()); 
      return null;
    }
    const response = await axios.get(
      `https://restcountries.com/v2/alpha?codes=${value}`
    );
    return response.data;
  }
);

const borderInformation = createSlice({
  name: "borders",
  initialState,
  reducers: {
    noBorder: (state) => {
      state.borderData = ["No Border"]; 
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBorders.pending, (state) => {
      state.fetchingBorders = true;
      state.borderData = [];
    });
    builder.addCase(fetchBorders.fulfilled, (state, action) => {
      state.borderData = action.payload;
      state.fetchingBorders = false;
    });
    builder.addCase(fetchBorders.rejected, (state) => {
      state.error = true;
    });
  },
});

export const borderReducer = borderInformation.reducer;
export const { noBorder } = borderInformation.actions;
