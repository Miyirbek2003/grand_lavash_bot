import { configureStore } from '@reduxjs/toolkit'
import sumSlice from './sumSlice'
export const store = configureStore({
    reducer: {
        sumSlice
    },
})
