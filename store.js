import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './src/store/cart-slice'
import { productsReducer } from './src/store/Products-slice'
export default configureStore({
  reducer: {cart:cartSlice,products:productsReducer}
})