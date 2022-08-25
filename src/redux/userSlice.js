import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    "users/login",
    async (user, { dispatch }) => {
        const res = await axios.post("http://localhost:5000/login", user);
        console.log("uservalidate: ", res.data.fullname);
        dispatch(update({ name: res.data.fullname }));
        return res.data;
    }
);

export const validateToken = createAsyncThunk(
    "users/verify",
    async ({ token, email, navigate }, { dispatch }) => {
        try {
            const res = await axios.post(
                "https://barangay-talon-uno.vercel.app/verify",
                email,
                {
                    Authorization: "Bearer " + token,
                }
            );

            return res.data.verify;
        } catch (error) {
            if (!error.response.data.verify) {
                navigate("/login");
                dispatch(validate());
            }
            return error.response.data.verify;
        }
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {
            name: null,
            email: null,
        },
        pending: false,
        error: false,
    },
    reducers: {
        validate: (state) => {
            localStorage.clear();
        },
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
        update: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        //     remove: (state) => {
        //         state = null;
        //     }
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.pending = true;
            state.error = false;
            console.log("pending..");
        },
        [loginUser.fulfilled]: (state, action) => {
            state.pending = false;
            state.userInfo = action.payload;
            console.log("fulfilled..");
        },
        [loginUser.rejected]: (state) => {
            state.pending = false;
            state.error = true;
            console.log("error..");
        },
    },
});

export const { updateStart, updateSuccess, updateErro, update, validate } =
    userSlice.actions;

export default userSlice.reducer;
