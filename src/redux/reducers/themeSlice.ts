import {createSlice} from "@reduxjs/toolkit";


interface themevalue {
    darkMode: boolean
}


const initialState:themevalue = {
    darkMode : false
}

const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        setDarkTheme: (state) => {
            state.darkMode = true;
        },
        setLightTheme: (state) => {
            state.darkMode = false;
        }
    }
})

export const {setDarkTheme, setLightTheme} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;