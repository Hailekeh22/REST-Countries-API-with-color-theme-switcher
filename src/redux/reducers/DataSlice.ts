import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface dataValue {
  data:any;
  error: boolean;
  loading: boolean;
  sucess: boolean;
}


export const fetchData = createAsyncThunk<any[], void>("fetchCountries", async () => {
  const countries = await axios.get("https://restcountries.com/v3.1/all");

  return countries.data;
});


const initialState:dataValue = {
    data: [],
    error: false,
    loading: false,
    sucess: false
}

const dataSlice = createSlice({
    name:"countries",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
      builder.addCase(fetchData.pending, (state) => {
        state.loading = true;
      }),
      builder.addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.sucess = true;
        state.data = action.payload;
      }),
      builder.addCase(fetchData.rejected, (state) => {
        state.error = true;
      })
    }
})

export const countriesReducer = dataSlice.reducer;