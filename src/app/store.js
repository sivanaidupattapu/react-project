import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import loginReducer from '../features/login/loginslice'
import { postsApi } from '../services/postApi'
import { productsApi } from '../services/productsApi'
import { loansApi } from '../services/loansApi'
import { loaninterestApi } from '../services/loaninterestApi'
export const store = configureStore({
  reducer: {
    loginReducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [productsApi.reducerPath]:productsApi.reducer,
    [loansApi.reducerPath]:loansApi.reducer,
    [loaninterestApi.reducerPath]:loaninterestApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postsApi.middleware,
      productsApi.middleware,
      loansApi.middleware,
      loaninterestApi.middleware
    )
})
setupListeners(store.dispatch)