import { configureStore } from '@reduxjs/toolkit'

//import reducers
import userReducer from '../reducers/user/userSlice'
import cartReducer from '../reducers/cart/cartSlice'

//Crea es store global
export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  }
})