import React from "react";
import Header from "../../components/header/header";
import {Container} from "react-bootstrap";
import {Outlet} from "react-router-dom";

function Main() {
    return (
        <Container fluid>
            <Header title="Dummy Shop"/>
            <Outlet/>
        </Container>
    )
}

export default Main
