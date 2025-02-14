import React, { useEffect, useState } from 'react';
import {
  Card,
  Col,
  Container,
  Row,
  Button,
  Badge,
} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../api/productsApi';

import '../css/ProductDetails.css';
import { FaStar, FaArrowLeft, FaShoppingCart, FaCheckCircle } from 'react-icons/fa'

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState( {} );

  useEffect(() => {

    getProductById(id)
      .then((response) => setProduct(response.data))
      .catch( error => console.error(error));
  }, []);


  return (

    <Container className="product-details-container">
      <Link to="/products" className="back-button d-flex align-items-center mb-4">
        <FaArrowLeft className="me-2" />
        Back to Products
      </Link>

      <Row className="justify-content-center">
        <Col xl={8} lg={10} md={12}>
          <Card className="luxury-product-card shadow-lg">
            <Row className="g-0">
              <Col md={6} className="d-flex justify-content-center align-items-center">
                <div className="product-image-wrapper position-relative">
                  <Card.Img
                    variant="top"
                    src={product?.image}
                    alt={product?.name}
                    className="product-image rounded"
                  />
                  <Badge
                    pill
                    bg="warning"
                    className="position-absolute top-0 start-0 m-2 p-2 product-rating"
                  >
                    <FaStar className="star-icon me-1" />5
                    {product?.rating}
                  </Badge>
                </div>
              </Col>

              <Col md={6}>
                <Card.Body className="p-4">
                  <Card.Title className="product-title display-6 fw-bold mb-3">
                    {product?.name}
                  </Card.Title>
                  <div className="product-price fs-3 text-danger fw-bold mb-4">
                    ${product?.price}
                  </div>

                  <ul className="list-unstyled product-meta mb-4">
                    <li className="meta-item d-flex align-items-center mb-2">
                      <span>Category: {product?.category}</span>
                    </li>
                    <li className="meta-item d-flex align-items-center mb-2">
                      <span>In Stock: {product?.quantity} units</span>
                    </li>
                    <li className="meta-item d-flex align-items-center mb-2">
                      <span>ID: #{product?.id}</span>
                    </li>
                  </ul>

                  <Card.Text className="product-description fs-6 text-muted">
                    {product?.description}
                  </Card.Text>

                  <div className="d-flex mt-4">
                    <Button
                      variant="success"
                      className="flex-grow-1 me-2 d-flex align-items-center justify-content-center"
                    >
                      <FaShoppingCart className="me-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="primary"
                      className="flex-grow-1 d-flex align-items-center justify-content-center"
                    >
                      <FaCheckCircle className="me-2" />
                      Buy Now
                    </Button>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}