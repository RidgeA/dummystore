import * as TestRenderer from 'react-test-renderer';
import React from "react";
import {testStore} from "../../../utils/test/store";
import {testRouter} from "../../../utils/test/router";
import ProductCard from "./card";
import {Product} from "../../../store/products.store";
import {setupStore} from '../../../store/store';

const product: Product = {
    category: "category",
    description: "description",
    id: 1,
    images: [],
    price: 100,
    rating: 4,
    thumbnail: "",
    title: "title"
}

describe('ProductCard', () => {
    it('renders', () => {
        const store = setupStore();
        const tree = TestRenderer
            .create(
                testStore(testRouter(<ProductCard product={product}/>), store)
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
