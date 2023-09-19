import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import popularProductsSlice from "./popularProductsSlice";
import filterProductsSlice from "./filterProductsSlice";

export const store = configureStore({
    reducer: {
        category: categoriesSlice,
        popular: popularProductsSlice,
        filter_products: filterProductsSlice
    }
});