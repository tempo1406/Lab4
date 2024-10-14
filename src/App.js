import React, { useState } from "react";
import NavbarComponent from "./components/Header";
import Carousel from "./components/Carousel";
import Menu from "./components/Menu";
import BookingForm from "./components/BookingForm";
import Cart from "./components/Cart";
import Login from "./components/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [user, setUser] = useState(); 

    const handleCloseCart = () => setShowCart(false);
    const handleShowCart = () => setShowCart(true);
    const [showLogin, setShowLogin] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const handleAddToCart = (product) => {
        const existingProduct = cartItems.find(
            (item) => item.title === product.title
        );
        if (existingProduct) {
            setCartItems(
                cartItems.map((item) =>
                    item.title === product.title
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
            toast.success("Add to cart successfully");
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
            toast.success("Add to cart successfully");
        }
    };

    const handleUpdateQuantity = (title, quantity) => {
        setCartItems(
            cartItems.map((item) =>
                item.title === title
                    ? { ...item, quantity: Math.max(1, quantity) }
                    : item
            )
        );
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce(
            (total, item) =>
                total + (item.salePrice || item.price) * item.quantity,
            0
        );
    };

    const handleRemoveFromCart = (title) => {
        setCartItems(cartItems.filter((item) => item.title !== title));
    };

    const totalItemsInCart = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const handleLoginSuccess = (userData) => {
        setUser(userData);
        handleCloseLogin();
    };

    const handleLogout = () => {
        setUser(null); // Clear user data
        toast.success("Logged out successfully!");
    };


    return (
        <>
            <ToastContainer />
            <div className="container-fluid bg-dark text-white">
                <NavbarComponent
                    totalItems={totalItemsInCart}
                    handleShowCart={handleShowCart}
                    handleshowLogin={handleShowLogin}
                    user={user}
                    handleLogout={handleLogout}
                />
                <Cart
                    show={showCart}
                    handleClose={handleCloseCart}
                    cartItems={cartItems}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleUpdateQuantity={handleUpdateQuantity}
                    totalPrice={calculateTotalPrice()}
                />
                <Login
                    show={showLogin}
                    handleClose={handleCloseLogin}
                    onLoginSuccess={handleLoginSuccess}
                ></Login>
                <div className="col-lg-12 mb-5">
                    <Carousel />
                </div>
                <div className="col-lg-12 mb-5">
                    <Menu handleAddToCart={handleAddToCart} />
                </div>
                <div className="col-lg-12">
                    <BookingForm />
                </div>
            </div>
        </>
    );
};

export default App;
