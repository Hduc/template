"use client";

import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ShapeExample = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <h4 className="fs-18 mb-4">Shape Example</h4>
           
          <Row>
            <Col xs={6} md={4}>
              <Image src="/images/product-6.jpg" alt='image' rounded />
            </Col>
            <Col xs={6} md={4}>
              <Image src="/images/product-7.jpg" alt='image' roundedCircle />
            </Col>
            <Col xs={6} md={4}>
              <Image src="/images/product-8.jpg" alt='image' thumbnail />
            </Col>
          </Row> 
        </Card.Body>
      </Card>
    </>
  )
}

export default ShapeExample;