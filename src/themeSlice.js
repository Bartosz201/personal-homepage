import { createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice({
    name: "theme",
    initialState: {
        darkTheme: false,
    },
    reducers:{
        toggleTheme: (previusState) =>{
            previusState.darkTheme = !previusState.darkTheme;
        },
    }
});

export default themeSlice.reducer;
export const {toggleTheme} = themeSlice.actions;

export const selectThemeState = state => state.theme;
export const selectDarkTheme = state => selectThemeState(state).darkTheme;