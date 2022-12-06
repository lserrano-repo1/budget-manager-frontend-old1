import {configureStore, combineReducers} from '@reduxjs/toolkit';
import mainSliceReducer from './mainSlice';

const rootReducer = combineReducers({
    appStore: mainSliceReducer,
});



export const createAppStore = () =>{
   return configureStore({
        reducer:rootReducer,
   });  
};
   



export const store = createAppStore();

