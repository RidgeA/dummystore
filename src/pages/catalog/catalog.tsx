import React, {useEffect} from "react";
import {Container} from "react-bootstrap";
import {loadCategories} from "../../store/categories.store";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store";
import ProductList from "./product-list";
import CategoryList from "./categories-list";
import {loadProductsWithParameters,} from "../../store/products.store";
import {useParams} from "react-router-dom";

export default function Catalog() {
    const {categoryId} = useParams()
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(loadCategories())
    }, [])

    useEffect(() => {
        dispatch(loadProductsWithParameters({categoryId}))
    }, [categoryId])

    return (
        <Container fluid style={{display: "flex", flexDirection: "row", alignItems: "start"}}>
            <div style={{width: "200px", minWidth: "200px", paddingRight: "10px"}}>
                <CategoryList></CategoryList>
            </div>
            <div>
                <ProductList></ProductList>
            </div>
        </Container>
    )
}

