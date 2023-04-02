import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add: (state,action)=>{
     state.push(action.payload)
    },
    remove:(state,action)=>{
        return state.filter((el)=>el.id!=action.payload.id)
    }
  }
})

// Action creators are generated for each case reducer function
export const { add,remove } = cartSlice.actions

export default cartSlice.reducer