import React from 'react';
import { ErrorField, InputChange } from "../../app/mainStore.d";


export interface UserLogin{
    email:string;
    pswrd:string;
    token:string;
}

export interface UserLoginState extends UserLogin {
    errorField : ErrorField[];
    
}

export interface UserLoginProps {
   
    userLoginState:UserLoginState;
    handleInputValue: (payload:InputChange) => ActionCreatorWithPayload<InputChange,string>;

}



