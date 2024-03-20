import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Card,Container} from 'react-bootstrap'
import './Allproduct.css'

const Allproducts = () => {
    const products = [
        {
          productName: "Laptop 3",
          price: 9102,
          rating: 4.69,
          discount: 98,
          availability: "out-of-stock"
        },
        {
          productName: "Laptop 14",
          price: 9254,
          rating: 4.67,
          discount: 56,
          availability: "out-of-stock"
        },
        {
          productName: "Laptop 11",
          price: 5683,
          rating: 3.5,
          discount: 56,
          availability: "yes"
        },
        {
          productName: "Laptop 9",
          price: 1742,
          rating: 3.2,
          discount: 39,
          availability: "yes"
        },
        {
          productName: "Laptop 1",
          price: 8521,
          rating: 2.95,
          discount: 91,
          availability: "yes"
        },
        {
          productName: "Laptop 13",
          price: 8686,
          rating: 2.89,
          discount: 24,
          availability: "out-of-stock"
        },
        {
          productName: "Laptop 10",
          price: 4101,
          rating: 2.53,
          discount: 37,
          availability: "out-of-stock"
        },
        {
          productName: "Laptop 4",
          price: 1258,
          rating: 2.45,
          discount: 33,
          availability: "out-of-stock"
        },
        {
          productName: "Laptop 10",
          price: 7145,
          rating: 1.98,
          discount: 15,
          availability: "yes"
        },
        {
          productName: "Laptop 5",
          price: 7980,
          rating: 1.82,
          discount: 89,
          availability: "yes"
        }
      ]

  return (
    <div>
      <h3>Top 10 products</h3>
      <Container>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', flexWrap: 'wrap' }}>
        
        {
          products.map((product) =>(
            <Card  style={{ width: '18rem' }} >
            <Card.Body>
              <Card.Title>{product.productName} </Card.Title>
              <p>${product.price} </p>
              <p>{product.rating} </p>
              <p>{product.discount}% </p>
              <p>{product.availability} </p>
            
            </Card.Body>
          </Card>
          ) )
        }
        
      </div>
      </Container>
    </div>
  )
}

export default Allproducts