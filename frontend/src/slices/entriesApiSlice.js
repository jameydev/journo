import { apiSlice } from './apiSlice';

const ENTRIES_URL = '/api/journal';

export const entriesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getEntries: builder.query({
            query: () => ENTRIES_URL,
            providesTags: ['Entry'],
        }),
        addEntry: builder.mutation({
            query: (data) => ({
                url: ENTRIES_URL,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Entry'],
        }),
        updateEntry: builder.mutation({
            query: (data) => ({
                url: `${ENTRIES_URL}/${data.id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Entry'],
        }),
        deleteEntry: builder.mutation({
            query: (id) => ({
                url: `${ENTRIES_URL}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Entry'],
        }),
    }),
});

export const {
    useGetEntriesQuery,
    useAddEntryMutation,
    useUpdateEntryMutation,
    useDeleteEntryMutation,
} = entriesApiSlice;