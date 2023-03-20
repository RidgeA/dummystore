import React from "react";
import {MemoryRouter} from "react-router-dom";

export function testRouter(e: React.ReactElement): React.ReactElement {
    return <MemoryRouter>{e}</MemoryRouter>
}