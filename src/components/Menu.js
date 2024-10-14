import React from "react";
import MenuItem from "./MenuItem";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const Menu = ({ handleAddToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    "https://api-demo-4gqb.onrender.com/products"
                );
                const data = await response.json();

                console.log("API Response:", data);
                if (Array.isArray(data.data)) {
                    setProducts(data.data);
                } else {
                    setProducts([]);
                    console.error("Expected an array but got:", data);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <Container className="mt-5">
            <h2 className="mb-4">Our Menu</h2>
            <Row>
                {products.map((product) => (
                    <MenuItem
                        key={product.id}
                        imgSrc={product.image}
                        title={product.title}
                        price={product.price}
                        salePrice={product.salePrice}
                        handleAddToCart={() => handleAddToCart(product)}
                    />
                ))}
            </Row>
        </Container>
    );
};

export default Menu;
