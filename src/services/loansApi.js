// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const loansApi = createApi({
    reducerPath: 'loansApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'http://localhost:3001/',
            prepareHeaders: (headers, { getState }) => {
                var token = JSON.parse(window.localStorage.getItem('user')).token;
                console.log("token in API", token)
                headers.set('token', token)
                return headers;
            }
        }
    ),
    endpoints: (builder) => ({
        getAllLoanTypes: builder.query({
            query: () => "/loanTypes",
        }),
        getAllLoans: builder.query({
            query: () => "/loans",
        }),
        getLoanByMobile:builder.query({
            query:(mobile)=>`/loans?mobile=${mobile}`
        }),
        addloan:(builder).mutation({
            query:(loan)=>{
                return {
                    url :"/loans",
                    method:"POST",
                    body:loan
                }
            }
        }),
        addUser:(builder).mutation({
            query:(user)=>{
                return {
                    url :"/users",
                    method:"POST",
                    body:user
                }
            }
        }),
        updateloan:(builder).mutation({
            query:(loan)=>{
                return {
                    url :`/loans/${loan.id}`,
                    method:"PUT",
                    body:loan
                }
            }
        }),
        updatedownpayment:(builder).mutation({
            query:(loan)=>{
                return {
                    url :`/loans/${loan.id}`,
                    method:"PUT",
                    body:loan
                }
            }
        }),
        updatedisburse:(builder).mutation({
            query:(loan)=>{
                return {
                    url :`/loans/${loan.id}`,
                    method:"PUT",
                    body:loan
                }
            }
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetAllLoanTypesQuery,
    useAddloanMutation,
    useGetAllLoansQuery,
    useUpdateloanMutation,
    useUpdatedownpaymentMutation,
    useUpdatedisburseMutation,
    useAddUserMutation,
    useGetLoanByMobileQuery,
    useLazyGetAllLoanTypesQuery
} = loansApi