import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'




export const getCategory = createAsyncThunk('sumSlice/getCategory', async (_, { dispatch }) => {
    const response = await axios.get('https://grandlavash.webclub.uz/api/categories', {
        headers: {
            'Accept': 'application/json',
            'Accept-Language': `ru`
        }
    })
    dispatch(setCategory(response.data.data))
})



export const getProducts = createAsyncThunk('sumSlice/getProducts', async (_, { dispatch }) => {
    const response = await axios.get('https://grandlavash.webclub.uz/api/products', {
        headers: {
            'Accept-Language': 'ru',
            'Accept': 'application/json',
        }
    })
    dispatch(setProducts(response.data.data))
})

export const getBanners = createAsyncThunk('sumSlice/getBanners', async (_, { dispatch }) => {
    const response = await axios.get('https://grandlavash.webclub.uz/api/banners', {
        headers: {
            'Accept-Language': 'ru',
            'Accept': 'application/json',
        }
    })

    dispatch(setBanners(response.data.data))
})

export const orderFood = createAsyncThunk('sumSlice/orderFood', async (selected_pr, { dispatch }) => {
    const telegram = window?.Telegram?.WebApp;
    const telegramData = telegram?.initData;
    let chat_id = telegram?.initDataUnsafe?.user?.id;
    if (!chat_id) {
        chat_id = 0;
    }

    const response = await axios.post('https://grandlavash.webclub.uz/api/orders/store-bot',
        {
            "chat_id": chat_id,
            "products": selected_pr,
            "address": selected_pr[0].address,
            "comment": selected_pr[0].comment
        },
        {
            headers: {
                "Accept": "application/json",
                "Accept-Language": "ru"
            }
        }
    )
    if (response.status == 200) {
        telegram.close();
    }
    return response.data

})



const initialState = {
    sum: 0,
    selected_pr: [],
    category: [],
    products: [],
    banners: [],
    chat_id: '',
    loading: false

}

const sumSlice = createSlice({
    name: "sumSlice",
    initialState,
    reducers: {
        descSum: (state, { payload }) => {
            const selected = state.selected_pr.find(item => item.id == payload.id)
            if (selected && selected.quantity != 0) {
                selected.quantity = selected.quantity - 1
                if (selected.quantity == 0) {
                    let indexArr
                    indexArr = state.selected_pr.findIndex(item => item.id == selected.id)
                    state.selected_pr.splice(indexArr, 1)
                }
                state.sum = state.sum - payload.price
            }
            // } else if (selected.id == payload.id && selected.quantity == 1) {
            //     indexArr = state.selected_pr.findIndex(item => item.id == selected.id)
            //     state.selected_pr.splice(indexArr, 1)
            // }

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
        setChatId: (state, { payload }) => {
            state.chat_id = payload
        },
        setBanners: (state, { payload }) => {
            state.banners = payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
            })
    }


})

export default sumSlice.reducer

export const { setProducts, addSum, setCategory, descSum, setBanners, setSelected_pr, setChatId } = sumSlice.actions