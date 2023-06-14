import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = `http://localhost:7001`;

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (data) => {
        const response = await axios.post(`/users/new`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    }
);

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (data) => {
        console.log(data);
        const response = await axios.post(`${URL}/users/login`, data);
        return response;
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        isLoggedIn: false,
        users: [],
        userDetails: {},
        response: "",
        noUserFound: false,
        error: ""
    },
    reducers: {
        logoutUser: (state) => {
            state.isLoggedIn = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(registerUser.fulfilled, (state, action) => {
            let msg = action.payload;
            state.response = msg.message;
        });

        builder.addCase(registerUser.rejected, (action) => {
            console.log(action.payload);
        });

        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.isLoggedIn = false;
        });

        builder.addCase(loginUser.fulfilled, (state, action) => {
            let statusCode = action.payload.status;

            if (statusCode == 201) {
                state.noUserFound = true;
            } else if (statusCode == 200) {
                state.userDetails = action.payload.data[0];
                state.isLoggedIn = true;
            }
        });

        builder.addCase(loginUser.rejected, (state, action) => {
            state.error = action.payload.message;
            state.isLoggedIn = false;
        });
    }
})

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;