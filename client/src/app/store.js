import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/bookSlice";
import cartReducer from "../features/cartSlice";
import userReducer from "../features/userSlice";

export default configureStore({
    reducer : {
        book : bookReducer,
        cart : cartReducer,
        user : userReducer
    }
})