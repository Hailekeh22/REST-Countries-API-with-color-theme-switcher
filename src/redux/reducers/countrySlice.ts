import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface dataValue {
    data: any
    loading: boolean
    error: boolean
}

const initialState:dataValue ={
    data: [],
    loading: false,
    error: false
}

export const countryInformation = createAsyncThunk(
  "countrydata",
  async (code:string) => {
    const response = await axios.get(
      `https://restcountries.com/v2/alpha/${code}`
    ); 
    return response.data;
  }
);



const countrySlice = createSlice({
    name:"caountryInfo",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(countryInformation.pending, (state) => {
          state.loading = true;
        });
        builder.addCase(countryInformation.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        });
        builder.addCase(countryInformation.rejected, (state) => {
          state.error = true;
        });
    }

})

export const countryDataReducer = countrySlice.reducer;