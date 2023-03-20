import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import Search from "../search/search";

interface Props {
    title: string;
}

class Header extends Component<Props> {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand>{this.props.title}</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="ma-auto">
                            <Nav.Link as={"span"}><Link to={''}>Catalog</Link></Nav.Link>
                            <Nav.Link as={"span"}><Link to={'order'}>Order & delivery</Link></Nav.Link>
                            <Nav.Link as={"span"}><Link to={'about'}>About Us</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Search/>
                </Container>
            </Navbar>
        );
    }
}

export default Header;
