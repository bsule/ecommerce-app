import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemsApiSlice = createApi({
    reducerPath: 'itemsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api/items/',
    }),
    endpoints: (builder) => ({
        getItems: builder.query({
            query: () => '',
        }),
        getItemById: builder.query({
            query: (id) => `${id}`,
        }),
    }),
});

export const { useGetItemsQuery, useGetItemByIdQuery } = itemsApiSlice;