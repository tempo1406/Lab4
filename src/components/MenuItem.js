import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

const MenuItem = ({ imgSrc, title, price, salePrice, handleAddToCart }) => {
    return (
        <div className="col-md-3">
            <Card className="mb-4 position-relative">
                {salePrice && (
                    <Badge bg="warning" className="badge position-absolute" style={{ width: 100, padding: 5 }}>
                        Sale
                    </Badge>
                )}
                <Card.Img variant="top" src={imgSrc} alt={title} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {salePrice ? (
                            <>
                                <span className="text-decoration-line-through">${price}</span>{" "}
                                <span className="text-danger">${salePrice}</span>
                            </>
                        ) : (
                            <span>${price}</span>
                        )}
                    </Card.Text>
                    <Button
                        className="form-control btn btn-dark"
                        onClick={() => handleAddToCart({ title, price, salePrice })}
                    >
                        Buy
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MenuItem;
