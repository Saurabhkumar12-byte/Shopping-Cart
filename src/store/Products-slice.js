import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export const getProducts = createAsyncThunk(
  'fetchProducts',
  () => {
    const res =  fetch('https://fakestoreapi.com/products').then(
    (data) => data.json()
  )
  return res
})


export const productSlice = createSlice({
  name: 'products',
  initialState:[],
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      
    },
    [getProducts.fulfilled]: (state, {payload}) => {
      
      return payload
    },
    [getProducts.rejected]: (state) => {
      console.log('error');
      
    },
  },
})

export const productsReducer = productSlice.reducer