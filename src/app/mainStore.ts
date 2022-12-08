import {configureStore, combineReducers, PreloadedState} from '@reduxjs/toolkit';
import mainSliceReducer from './mainSlice';
import userLoginReducer from '../features/Login/userLoginSlice';

const rootReducer = combineReducers({
    app: mainSliceReducer,
    userLogin: userLoginReducer
});



export const createAppStore = () =>{
   return configureStore({
        reducer:rootReducer  
   }) 
};
   

//export type AppStore = ReturnType<typeof createAppStore>
export type RootState = ReturnType<typeof rootReducer>;
export const store = createAppStore();

