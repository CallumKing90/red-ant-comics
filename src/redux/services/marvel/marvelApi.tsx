// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiKey } from "./../../../../config/config";

// Define a service using a base URL and expected endpoints
export const marvelApi = createApi({
  reducerPath: "marvelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gateway.marvel.com/v1/public",
  }),
  tagTypes: ["Comic"],
  endpoints: (builder) => ({
    getAllComics: builder.query({
      query: () => `/comics${apiKey}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllComicsQuery } = marvelApi;
