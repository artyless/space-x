import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { spacexApi } from './api'

const store = configureStore({
  reducer: {
    [spacexApi.reducerPath]: spacexApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spacexApi.middleware),
})

setupListeners(store.dispatch)

export default store
