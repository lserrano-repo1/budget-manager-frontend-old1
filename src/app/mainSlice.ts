import { createSlice } from "@reduxjs/toolkit";
import { mainAppState } from './mainStore.d';


const initialState: mainAppState = {
    usrLoggedToken: '',
};

/** Create redux slice */
export const mainSlice = createSlice({
    name: 'appGeneralStore',
    initialState,
    reducers: {},
    extraReducers: {},
});


export default mainSlice.reducer;