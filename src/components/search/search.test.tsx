import React from "react";
import * as TestRenderer from "react-test-renderer";
import Search from "./search";
import {testStore} from "../../utils/test/store";
import {setupStore} from "../../store/store";

describe('Search', () => {
    it('renders', () => {
        const store = setupStore()
        const tree = TestRenderer
            .create(testStore(<Search></Search>, store))
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with search term', () => {
        const store = setupStore({
            products: {
                list: [],
                page: {current: 0, total: 0},
                limit: 10,
                status: "succeeded",
                searchTerm: "phone"
            }
        })
        const tree = TestRenderer
            .create(testStore(<Search></Search>, store))
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
