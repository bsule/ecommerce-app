import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAccessToken } from '../../utils/tokenManager';

// Base URL for your API
const baseQuery = fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api/',
    prepareHeaders: (headers) => {
        const token = getAccessToken();
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const cartApiSlice = createApi({
    reducerPath: 'cartApi',
    baseQuery,
    endpoints: (builder) => ({
        addToCart: builder.mutation({
            query: ({ item, quantity }) => ({
                url: 'cart/add/',
                method: 'POST',
                body: {
                    item,
                    quantity
                },
            }),
        }),
        viewCart: builder.query({
            query: () => 'cart/',
        }),
        removeFromCart: builder.mutation({
            query: ({item}) => ({
                url: `cart/remove/`,
                method: 'DELETE',
                body: { item },
            }),
        }),
    }),
});

export const { useAddToCartMutation, useViewCartQuery, useRemoveFromCartMutation } = cartApiSlice;