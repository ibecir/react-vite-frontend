import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

export const bookSlice = createApi({
    reducerPath: "books",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["books"],
    endpoints: (builder) => ({
        getBooks: builder.query<any, void>({
            query: () => "/books/",
            providesTags: ["books"],
        }),
        addBook: builder.mutation({
            query: (todo) => ({
                url: "/books",
                method: "POST",
                body: todo,
            }),
            invalidatesTags: ["books"],
        }),
        updateBook: builder.mutation({
            query: (todo) => ({
                url: `books/${todo.id}`,
                method: "PATCH",
                body: todo,
            }),
            invalidatesTags: ["books"],
        }),
        deleteBook: builder.mutation({
            query: ({ id }) => ({ url: `books/${id}`, method: "DELETE" }),
            invalidatesTags: ["books"],
        }),
    }),
});

export const {
    useGetBooksQuery,
    useAddBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation,
} = bookSlice;

export default bookSlice