import React from "react";
import {Provider} from "react-redux";
import type {Store} from "@reduxjs/toolkit";

export function testStore(e: React.ReactElement, store: Store): React.ReactElement {
    return <Provider store={store}>{e}</Provider>
}
