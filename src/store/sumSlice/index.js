import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'




export const getCategory = createAsyncThunk('sumSlice/getCategory', async (_, { dispatch }) => {
    const response = await axios.get('https://qr-menu.premierlounge.uz/api/categories', {
        headers: {
            'Accept': 'application/json',
            'Accept-Language': `ru`
        }
    })
    dispatch(setCategory(response.data.data))
})



export const getProducts = createAsyncThunk('sumSlice/getProducts', async (_, { dispatch }) => {
    const response = await axios.get('https://qr-menu.premierlounge.uz/api/products', {
        headers: {
            'Accept-Language': 'ru'
        }
    })
    dispatch(setProducts(response.data.data))
})


const initialState = {
    sum: 0,
    selected_pr: [

    ],
    category: [],
    products: []
}

const sumSlice = createSlice({
    name: "sumSlice",
    initialState,
    reducers: {

        descSum: (state, { payload }) => {
            const selected = state.selected_pr.find(item => item.id == payload.id)
            if (selected && selected.quantity != 0) {
                selected.quantity = selected.quantity - 1
                state.sum = state.sum - payload.price
            } else if (selected && selected.quantity == 0) {
                state.selected_pr = state.selected_pr.filter(item => item.id != selected.id)
            }

        },
        setSelected_pr: (state, { payload }) => {

            const selected = state.selected_pr.find(item => item.id == payload.id)


            if (state.selected_pr.find(item => item.id == payload.id)) {
                selected.quantity = selected.quantity + 1
                state.sum = state.sum + payload.price
            } else {
                payload.quantity = 1
                state.selected_pr.push(payload)
                state.sum = state.sum + payload.price
            }

        },
        setCategory: (state, { payload }) => {
            state.category = payload
        },
        setProducts: (state, { payload }) => {
            state.products = payload
        },
    },
})

export default sumSlice.reducer

export const { setProducts, addSum, setCategory, descSum, setSelected_pr } = sumSlice.actions