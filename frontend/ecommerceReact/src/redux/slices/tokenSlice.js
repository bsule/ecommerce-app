import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    accessToken: null,
    refreshToken: null,
};

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        logout: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
        },
    },
});

export const { setCredentials, logout } = tokenSlice.actions;
export default tokenSlice.reducer;