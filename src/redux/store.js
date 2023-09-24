import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import popularProductsSlice from "./popularProductsSlice";
import filterProductsSlice from "./filterProductsSlice";
import authSlice from "./authSlice";
import ordersSlice from "./ordersSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        category: categoriesSlice,
        popular: popularProductsSlice,
        filter_products: filterProductsSlice,
        auth: authSlice,
        order: ordersSlice,
        user: userSlice
    }
});