import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Index = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <>
            <Navbar bg={"light"} expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Agri-Chain</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        </Nav>
                        <div className={"d-flex flex-row w-100 my-2"}>
                            <div className={"flex-grow-0 flex-lg-grow-1"}/>
                            {/*<Button className={"flex-grow-1 flex-lg-grow-0"} variant={'outline-dark'}*/}
                            {/*        onClick={() => connectWallet(navigate, location, dispatch)}*/}
                            {/*        hidden={web3State['account']!==undefined}>*/}
                            {/*    Connect To Metamask*/}
                            {/*</Button>*/}
                            {/*<Nav.Link className={"flex-grow-1 flex-lg-grow-0 text-black "}*/}
                            {/*          as={Link} to="/profile"*/}
                            {/*          hidden={web3State['account'] === undefined}>*/}
                            {/*    {web3State['account']}*/}
                            {/*</Nav.Link>*/}
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Index;