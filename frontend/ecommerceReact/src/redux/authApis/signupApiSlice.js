import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAccessToken, setRefreshToken } from '../../utils/tokenManager';

export const signupApiSlice = createApi({
    reducerPath: 'signupApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/users/' }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (credentials) => ({
                url: 'register/',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const { useSignupMutation } = signupApiSlice;