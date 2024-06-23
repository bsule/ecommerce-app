import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAccessToken, getRefreshToken, clearTokens } from '../../utils/tokenManager';

export const logoutApiSlice = createApi({
    reducerPath: 'logoutApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api/users/',
        prepareHeaders: (headers) => {
            const token = getAccessToken();
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        logout: builder.mutation({
            query: () => ({
                url: 'logout/',
                method: 'POST',
                body: { 
                    refresh: getRefreshToken()
                },
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    clearTokens();
                } catch (error) {
                    console.log('Already logged out');
                }
            },
        }),
    }),
});

export const { useLogoutMutation } = logoutApiSlice;
