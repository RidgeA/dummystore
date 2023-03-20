import {combineReducers, configureStore, PreloadedState} from "@reduxjs/toolkit";
import {categoriesSlice} from "./categories.store";
import {productsSlice} from "./products.store";

const rootReducer = combineReducers({
    categories: categoriesSlice.reducer,
    products: productsSlice.reducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
