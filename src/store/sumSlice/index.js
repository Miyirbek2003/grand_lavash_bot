import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sum: 0
}

const sumSlice = createSlice({
    name: "sumSlice",
    initialState,
    reducers: {
        addSum: (state, { payload }) => {
            state.sum = state.sum + parseInt(payload)
        },
        descSum: (state, { payload }) => {
            state.sum = state.sum - parseInt(payload)
        }
    },
})

export default sumSlice.reducer

export const { addSum, descSum } = sumSlice.actions