import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './layout/main/main'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import OrderDelivery from "./pages/order/order";
import About from "./pages/about/about";
import Catalog from "./pages/catalog/catalog";
import {setupStore} from "./store/store";
import {Provider} from 'react-redux';
import ProductPage from "./pages/product/product";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "",
                element: <Catalog/>
            },
            {
                path: "/category/:categoryId?",
                element: <Catalog/>
            },
            {
                path: "/product/:productId",
                element: <ProductPage/>
            },
            {
                path: "/order",
                element: <OrderDelivery/>
            },
            {
                path: "/about",
                element: <About/>
            }
        ]
    },
], {
    basename: "/dummystore",
});

ReactDOM
    .createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <Provider store={setupStore()}>
            <RouterProvider router={router}/>
        </Provider>
    )
