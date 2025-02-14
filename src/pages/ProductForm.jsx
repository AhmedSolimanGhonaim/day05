import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../api/productsApi';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addProductAction, editProductAction } from '../store/productSlice';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ProductForm.css';

export default function ProductForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
    description: "",
    image: ""
  })

  useEffect( () => {
    if ( id != 0 ) {
        getProductById( id )
            .then( ( response ) => setFormData( response.data ) )
            .catch( ( error ) => { console.log( error ) } )
    }

  }, [] )
  const inputHandler = ( e ) => {
      setFormData( {
          ...formData,
          [ e.target.name ]: e.target.value
      } )
  }

  const productHandler = async (e) => {
    e.preventDefault()

    if (id == 0) {
      await dispatch(addProductAction(formData))
      navigate('/products')
    } else {
      await dispatch(editProductAction({ id, product: formData }));
      navigate(`/products`)
    }
  }

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow">
        <h2 className="text-center mb-4">
          {id === "0" ? <> Add New Product</> : <> Edit Product</>}
        </h2>
        <Form onSubmit={productHandler}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label> Product Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={inputHandler} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label> Price</Form.Label>
                <Form.Control type="number" name="price" value={formData.price} onChange={inputHandler} required />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label> Category</Form.Label>
                <Form.Control type="text" name="category" value={formData.category} onChange={inputHandler} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label> Quantity</Form.Label>
                <Form.Control type="number" name="quantity" value={formData.quantity} onChange={inputHandler} required />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label> Description</Form.Label>
            <Form.Control as="textarea" name="description" value={formData.description} onChange={inputHandler} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> Image URL</Form.Label>
            <Form.Control type="url" name="image" value={formData.image} onChange={inputHandler} required />
          </Form.Group>
          <div className="text-center">
            <Button type="submit" variant="primary">
              {id === "0" ? "Create Product" : "Update Product"}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}
