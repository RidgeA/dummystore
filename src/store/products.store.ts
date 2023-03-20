import {createAsyncThunk, createSlice, Draft} from "@reduxjs/toolkit";
import {RootState} from "./store";

export interface Product {
    id: number
    title: string
    description: string
    price: number
    category: string
    thumbnail: string
    images: string[]
    rating: number
}

interface ProductsState {
    list: Product[]
    page: { current: number; total: number };
    limit: number
    status: "idle" | "loading" | "succeeded" | "error"
    error?: string
    product?: Product,
    searchTerm: string
}

export interface ProductsParameters {
    categoryId?: string
    page?: number
    search?: string
}

const initialState: ProductsState = {
    list: [],
    page: {current: 0, total: 0},
    limit: 10,
    status: "idle",
    searchTerm: ""
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(loadProducts.pending, loadingReducer)
            .addCase(loadProducts.rejected, errorReducer)
            .addCase(loadProducts.fulfilled, successReducer)

            .addCase(loadProductsWithParameters.pending, loadingReducer)
            .addCase(loadProductsWithParameters.rejected, errorReducer)
            .addCase(loadProductsWithParameters.fulfilled, successReducer)

            .addCase(loadProductById.pending, loadingReducer)
            .addCase(loadProductById.rejected, errorReducer)
            .addCase(loadProductById.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.product = action.payload
            })
    }
})

const loadingReducer = (state: Draft<ProductsState>) => {
    state.error = undefined;
    state.status = "loading"
}

const errorReducer = (state: Draft<ProductsState>, action: any) => {
    state.status = "error"
    state.error = action.error.message
}

const successReducer = (state: Draft<ProductsState>, action: any) => {
    state.status = "succeeded"
    const {products: list, total, skip, limit} = action.payload
    state.list = list
    state.page.total = total / limit
    state.page.current = (skip / limit) + 1
}

export const loadProducts = createAsyncThunk<any, void, { state: RootState }>("products/load", async (params, api) => {
    const {products: {limit}} = api.getState()
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}`)
    return res.json()
})

export const loadProductsWithParameters = createAsyncThunk<any, ProductsParameters, { state: RootState }>("products/load/byCategory", async (params, api) => {

    const {products: {limit}} = api.getState()

    const skip = ((params.page || 1) - 1) * limit

    const qps = [
        `limit=${limit}`,
        `skip=${skip}`,
    ].join("&")

    let res;
    switch (true) {
        case !!params.categoryId: {
            res = await fetch(`https://dummyjson.com/products/category/${params.categoryId}?${qps}`)
            break;
        }
        case !!params.search: {
            res = await fetch(`https://dummyjson.com/products/search?q=${params.search}&${qps}`)
            break;
        }
        default:
            res = await fetch(`https://dummyjson.com/products?${qps}`)
    }

    return res.json()
})

export const loadProductById = createAsyncThunk<any, number, { state: RootState }>("products/load/byId", async (productId: number) => {
    const res = await fetch(`https://dummyjson.com/products/${productId}`)
    return res.json()
})