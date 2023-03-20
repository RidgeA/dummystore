import * as TestRenderer from 'react-test-renderer';
import Header from './header';
import React from "react";
import {testRouter} from "../../utils/test/router";
import {setupStore} from "../../store/store";
import {testStore} from "../../utils/test/store";

describe('Header', () => {
    it('renders', () => {
        const tree = TestRenderer
            .create(
                testStore(testRouter(<Header title="My Title"></Header>), setupStore())
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});