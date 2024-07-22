import { configureStore } from '@reduxjs/toolkit';
import { loginApiSlice } from './authApis/loginApiSlice';
import { userApiSlice } from './authApis/userApiSlice';
import { logoutApiSlice } from './authApis/logoutApiSlice';
import { signupApiSlice } from './authApis/signupApiSlice';
import { refreshApiSlice } from './authApis/refreshApiSlice';
import { itemsApiSlice } from './authApis/getItemsApiSlice';
import { cartApiSlice } from './cartApis/cartApiSlice';
import tokenReducer from './slices/tokenSlice';

export const store = configureStore({
    reducer: {
        token: tokenReducer,
        [loginApiSlice.reducerPath]: loginApiSlice.reducer,
        [userApiSlice.reducerPath]: userApiSlice.reducer,
        [logoutApiSlice.reducerPath]: logoutApiSlice.reducer,
        [signupApiSlice.reducerPath]: signupApiSlice.reducer,
        [refreshApiSlice.reducerPath]: refreshApiSlice.reducer,
        [itemsApiSlice.reducerPath]: itemsApiSlice.reducer,
        [cartApiSlice.reducerPath]: cartApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            loginApiSlice.middleware,
            userApiSlice.middleware,
            logoutApiSlice.middleware,
            signupApiSlice.middleware,
            refreshApiSlice.middleware,
            itemsApiSlice.middleware,
            cartApiSlice.middleware,
        ),
});
