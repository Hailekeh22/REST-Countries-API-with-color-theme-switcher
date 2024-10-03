import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


interface dataValue {
    borderData: any;
    fetchingBorders: boolean;
    error: boolean;
}


const initialState:dataValue = {
    borderData: [],
    fetchingBorders: false,
    error: false
}


export const fetchBorders = createAsyncThunk("borderdata", async(value:string) => {
    if(value == "") {
        return null;
    }
    const response = await axios.get(`https://restcountries.com/v2/alpha?codes=${value}`);

    return response.data;
})



const borderInformation = createSlice({
    name: "borders",
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchBorders.pending, (state) => {
            state.fetchingBorders = true;
            state.borderData = ["no data"];
        });
        builder.addCase(fetchBorders.fulfilled, (state,action) => {
            if(action.payload == null) {
                state.borderData = [""];
            } else {
                state.borderData = action.payload;
            }
            
            state.fetchingBorders = false;            
        });
        builder.addCase(fetchBorders.rejected, (state) => {
            state.error = true;
            state.borderData = ["no data"]
        });
    }
})

export const borderReducer = borderInformation.reducer;
