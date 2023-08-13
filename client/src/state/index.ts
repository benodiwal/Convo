import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
}

export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.token = null;
            state.user = null;
        }
    }
});

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;