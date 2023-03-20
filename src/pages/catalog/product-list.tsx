import React, {useMemo} from "react";
import ProductCard from "../../components/product/card/card";
import {useAppSelector} from "../../hooks";
import {Pagination} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store";
import {loadProductsWithParameters} from "../../store/products.store";


export default function ProductList() {
    const dispatch = useDispatch<AppDispatch>()
    const {list, page} = useAppSelector(state => state.products)

    const loadPage = (page: number) => () => dispatch(loadProductsWithParameters({page}))

    const pages = useMemo(() => {
        const pages = []
        for (let i = Math.min(page.current, 1); i <= page.total; i++) {
            pages.push(
                <Pagination.Item key={i} active={i == page.current} onClick={loadPage(i)}>{i}</Pagination.Item>
            )
        }
        return pages;
    }, [page])


    return (
        <div>
            <div className="d-flex flex-wrap">
                {list.map(p => <ProductCard key={p.id} product={p}></ProductCard>)}
            </div>
            {pages.length > 1 &&
                <Pagination className="app-pagination">
                    {pages}
                </Pagination>
            }
        </div>
    )
}

