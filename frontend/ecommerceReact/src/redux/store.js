import { configureStore } from '@reduxjs/toolkit';
import { loginApiSlice } from './authApis/loginApiSlice';
import { userApiSlice } from './authApis/userApiSlice';
import { logoutApiSlice } from './authApis/logoutApiSlice';
import { signupApiSlice } from './authApis/signupApiSlice';
import { refreshApiSlice } from './authApis/refreshApiSlice';
import tokenReducer from './slices/tokenSlice';

export const store = configureStore({
    reducer: {
        token: tokenReducer,
        [loginApiSlice.reducerPath]: loginApiSlice.reducer,
        [userApiSlice.reducerPath]: userApiSlice.reducer,
        [logoutApiSlice.reducerPath]: logoutApiSlice.reducer,
        [signupApiSlice.reducerPath]: signupApiSlice.reducer,
        [refreshApiSlice.reducerPath]: signupApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loginApiSlice.middleware).concat(userApiSlice.middleware).concat(signupApiSlice.middleware).concat(logoutApiSlice.middleware).concat(refreshApiSlice.middleware),
});