import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import userSlice from '../features/auth/userSlice';
import authSlice from '../features/auth/authSlice';
export const store = configureStore({
    reducer:{
        user: userSlice,
        auth: authSlice,
    },
})