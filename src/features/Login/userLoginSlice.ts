import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InputChange } from "../../app/mainStore.d";
import { UserLoginState } from "./UserLogin.d";

export const initialState: UserLoginState = {
    email: "",
    pswrd: "",
    token: "",
    errorField: [],
    
};

export const userLoginSlice = createSlice({
    name: 'userLoginSlc',
    initialState,
    reducers: {
        handleInputValue: (state: UserLoginState, action: PayloadAction<InputChange>) => {
            const { value, field } = action.payload;

            getNewValues(field, state, value);

        },
    }
});


function getNewValues(field: string, state: UserLoginState, value: string) {
    switch (field) {
        case 'email-text-field':
            state.email = value;
            break;
        case 'pswrd-text-field':
            state.pswrd = value;
            break;
    }
};


/** Exporting actions */
export const { handleInputValue } = userLoginSlice.actions;

/** Exporting reduced */
export default userLoginSlice.reducer;