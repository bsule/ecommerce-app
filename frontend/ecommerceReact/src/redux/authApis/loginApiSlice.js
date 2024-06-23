import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAccessToken, setRefreshToken } from '../../utils/tokenManager';

export const loginApiSlice = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/users/' }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'login/',
                method: 'POST',
                body: credentials,
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try{
                    const { data } = await queryFulfilled;
                    setAccessToken(data.access);
                    setRefreshToken(data.refresh);
                }
                catch (error) {
                    console.error('Login failed');
                }
            },
        }),
    }),
});

export const { useLoginMutation } = loginApiSlice;
