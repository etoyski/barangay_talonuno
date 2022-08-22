import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const loginUser = createAsyncThunk ("users/login", async (user) => {
    const res = await axios.post(
        "https://barangay-talon-uno.vercel.app/login",
        user
    );
    return res.data;
})
export const userSlice = createSlice({
    name: "user",
    initialState:{
        userInfo:{
            name: "sample",
            email:"sdss",
        },
    pending:false,
    error: false,
},
    reducers: {
        // setUser: (state, {payload}) => {
        // state.userInfo = payload;
        // },
        // updateStart: (state) => {
        //     state.pending = true;
        // },
        // updateSuccess: (state,action) => {
        //     state.pending = false;
        //     state.userInfo = action.payload;
        // },
        // updateError: (state) => {
        //     state.error =true;
        //     state.pending = false;
        // },
    //     update: (state,action) => {
    //         state.name = action.payload.name;
    //         state.email = action.payload.email;
    //     },
    //     remove: (state) => {
    //         state = null;
    //     }
    },
    extraReducers: {
        [loginUser.pending]: (state) =>{
            state.pending = true;
            state.error = false;
        },
        [loginUser.fulfilled]: (state, action) =>{
            state.pending = false;
            state.userInfo = action.payload;
        },
        [loginUser.rejected]: (state) =>{
            state.pending = false;
            state.error = true;
        },
    },
});


export const { updateStart, updateSuccess,updateError} = userSlice.actions;
export default userSlice.reducer;