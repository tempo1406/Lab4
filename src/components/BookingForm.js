import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

const BookingForm = () => {
    return (
        <Container>
            <Row className="mb-3">
                <h2 className="text-center">Book Your Table</h2>
            </Row>
            <Form>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formName">
                            <Form.Control type="text" placeholder="Your Name" aria-label="Your Name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formEmail">
                            <Form.Control type="email" placeholder="Your Email" aria-label="Your Email" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formService">
                            <Form.Select aria-label="Select a Service">
                                <option>Select a Service</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formComments">
                            <Form.Control 
                                as="textarea" 
                                rows={5} 
                                placeholder="Please write your comment" 
                                aria-label="Please write your comment" 
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-10">
                    <Col>
                        <Button variant="warning" type="submit">
                            Send Message
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default BookingForm;
