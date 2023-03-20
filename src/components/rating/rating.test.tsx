import React from "react";
import * as TestRenderer from "react-test-renderer";
import Rating from "./rating";

describe('Rating', () => {
    it('renders', () => {
        const tree = TestRenderer
            .create(
                <Rating value={1}></Rating>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});