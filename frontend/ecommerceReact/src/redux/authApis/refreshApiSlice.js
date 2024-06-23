import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAccessToken, setRefreshToken } from '../../utils/tokenManager';

export const refreshApiSlice = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/users/' }),
    endpoints: (builder) => ({
        refreshToken: builder.mutation({
            query: (refreshToken) => ({
                url: 'token/refresh/',
                method: 'POST',
                body: { refresh: refreshToken },
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try{
                    const { data } = await queryFulfilled;
                    console.log(data);
                    setAccessToken(data.access);
                    setRefreshToken(data.refresh);
                }
                catch (error) {
                    console.error('refresh failed');
                }
            },
        }),
    }),
});

export const { useRefreshTokenMutation } = refreshApiSlice;
