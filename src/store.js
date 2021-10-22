import userReducer from './features/userSlice';
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore ({

reducers:{
    user:userReducer
}

});