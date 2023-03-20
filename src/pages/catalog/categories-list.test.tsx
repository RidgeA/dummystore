import React from "react";
import * as TestRenderer from "react-test-renderer";
import {testStore} from "../../utils/test/store";
import {setupStore} from "../../store/store";
import CategoryList from "./categories-list";
import {testRouter} from "../../utils/test/router";

describe('CategoryList', () => {
    it('renders', () => {
        const store = setupStore()
        const tree = TestRenderer
            .create(testStore(testRouter(<CategoryList/>), store))
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
