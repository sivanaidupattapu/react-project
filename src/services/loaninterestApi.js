// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const loaninterestApi = createApi({
    reducerPath: 'loaninterestApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'http://localhost:3001/intrestrates',
            prepareHeaders: (headers, { getState }) => {
                var token = JSON.parse(window.localStorage.getItem('user')).token;
                console.log("token in API", token)
                headers.set('token', token)
                return headers;
            }
        }
    ),
    endpoints: (builder) => ({
        getAllLoanInterest: builder.query({
            query: () => "/",
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetAllLoanInterestQuery,
    useLazyGetAllLoanInterestQuery
} = loaninterestApi