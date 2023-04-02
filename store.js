import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './src/store/cart-slice'
export default configureStore({
  reducer: {cart:cartSlice}
})