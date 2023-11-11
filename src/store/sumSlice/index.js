import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sum: 0,
    selected_pr: []
}

const sumSlice = createSlice({
    name: "sumSlice",
    initialState,
    reducers: {
        addSum: (state, { payload }) => {
            state.sum = state.sum + parseInt(payload)
        },
        descSum: (state, { payload }) => {
            if (payload.title) {
                for (var i = state.selected_pr.length - 1; i >= 0; i--) {
                    if (state.selected_pr[i] === payload.title) {
                        state.selected_pr.splice(i, 1);
                        state.sum = state.sum - parseInt(payload.price)
                        break
                    }
                }
            }

        },
        setSelected_pr: (state, { payload }) => {
            state.selected_pr.push(payload)
        }
    },
})

export default sumSlice.reducer

export const { addSum, descSum, setSelected_pr } = sumSlice.actions