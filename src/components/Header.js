import React from "react";
import {
    Navbar as BootstrapNavbar,
    Nav,
    Button,
    Form,
    FormControl,
    Badge,
} from "react-bootstrap";

const NavbarComponent = ({ handleShowCart, totalItems, handleshowLogin, user, handleLogout }) => {
    return (
        <BootstrapNavbar bg="dark" variant="dark" expand="lg">
            <div className="container-fluid">
                <BootstrapNavbar.Brand href="#">
                    Pizza House
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
                <BootstrapNavbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About Us</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button
                            variant="primary"
                            className="position-relative me-3"
                            onClick={handleShowCart}
                        >
                            <i className="fa fa-shopping-cart"></i>
                            {totalItems > 0 && (
                                <Badge
                                    bg="danger"
                                    pill
                                    className="position-absolute translate-middle"
                                    style={{ top: "3px", left: "100%" }}
                                >
                                    {totalItems}
                                </Badge>
                            )}
                            <span className="visually-hidden">Cart</span>
                        </Button>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="danger" className="me-2">
                            <i className="fa fa-search"></i>
                        </Button>
                        {user ? (
                            <>
                                <span className="navbar-text text-white me-2">
                                    {user.data.name}
                                </span>
                                <Button
                                    variant="outline-light"
                                    onClick={handleLogout} // Handle logout
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <Button
                                className="btn-login"
                                onClick={handleshowLogin}
                            >
                                Login
                            </Button>
                        )}
                    </Form>
                </BootstrapNavbar.Collapse>
            </div>
        </BootstrapNavbar>
    );
};

export default NavbarComponent;
