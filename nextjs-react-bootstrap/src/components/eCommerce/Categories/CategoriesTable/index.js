"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Pagination from "./Pagination";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import SearchForm from "./SearchForm";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from 'react-bootstrap/Button';

const categoriesData = [
  {
    image: '/images/product-1.jpg',
    name: 'Watch',
    totalProducts: 54,
    slug: 'watch',
    description: 'What is lorem ipsum?',
    status: 'active',
  },
  {
    image: '/images/product-2.jpg',
    name: 'Headphone',
    totalProducts: 13,
    slug: 'headphone',
    description: 'Why do we use it?',
    status: 'active',
  },
  {
    image: '/images/product-3.jpg',
    name: 'Mobile',
    totalProducts: 42,
    slug: 'mobile',
    description: 'Where does it come from?',
    status: 'deactive',
  },
  {
    image: '/images/product-4.jpg',
    name: 'Speaker',
    totalProducts: 32,
    slug: 'speaker',
    description: 'Where can I get some?',
    status: 'active',
  },
  {
    image: '/images/product-5.jpg',
    name: 'Electronics',
    totalProducts: 100,
    slug: 'electronics',
    description: 'Contrary to popular belief',
    status: 'active',
  }
];

const CategoriesTable = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-lg-4 mb-3">
            <SearchForm />

            <button 
              className="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
              onClick={handleShow}
            >
              <span className="py-sm-1 d-block">
                <i className="ri-add-line d-none d-sm-inline-block fs-18"></i>
                <span>Add New Categorie</span>
              </span>
            </button>
          </div>

          <div className="default-table-area ec-recent-orders">
            <div className="table-responsive">
              <Table className="align-middle">
                <thead>
                  <tr>
                    <th scope="col">
                      <Form>
                        <Form.Check
                          type="checkbox"
                          id="default-checkbox"
                          label="" 
                        />
                      </Form> 
                    </th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Total Products</th>
                    <th scope="col">Slug</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {categoriesData &&
                    categoriesData.slice(0, 10).map((value, i) => (
                      <tr key={i}>
                        <td>
                          <Form>
                            <Form.Check
                              type="checkbox"
                              id="default-checkbox"
                              label="" 
                            />
                          </Form> 
                        </td>

                        <td>
                          <Image
                            src={value.image}
                            className="wh-40 rounded-100"
                            alt="product-1"
                            width={40}
                            height={40}
                          /> 
                        </td>

                        <td>{value.name}</td>

                        <td>{value.totalProducts}</td>

                        <td>{value.slug}</td>

                        <td>{value.description}</td>

                        <td>
                          <span
                            className={`badge bg-opacity-10 p-2 fs-12 fw-normal text-capitalize ${value.status}`}
                          >
                            {value.status}
                          </span>
                        </td>

                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                              <MaterialSymbol
                                icon="visibility"
                                size={16}
                                className="text-primary"
                              />
                            </button>

                            <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                              <MaterialSymbol
                                icon="edit"
                                size={16}
                                className="text-body"
                              />
                            </button>

                            <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                              <MaterialSymbol
                                icon="delete"
                                size={16}
                                className="text-danger"
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>

            {/* Pagination */}
            <Pagination />
          </div>
        </Card.Body>
      </Card>

      {/* Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header className="border-bottom p-4" closeButton>
          <Offcanvas.Title className="fs-18 mb-0">Add New Categorie</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="p-4">
          <Form>
            <Form.Group className="mb-4">
              <Form.Label className="label">Image</Form.Label>
              <Form.Control
                type="file"
                className="text-dark" 
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label">Name</Form.Label>
              <Form.Control
                type="text"
                className="text-dark"
                placeholder="Name"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label">Total Products</Form.Label>
              <Form.Control
                type="text"
                className="text-dark"
                placeholder="Total Products"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label">Slug</Form.Label>
              <Form.Control
                type="text"
                className="text-dark"
                placeholder="Slug"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="label">Description</Form.Label>
              <Form.Control
                as="textarea"
                className="text-dark"
                placeholder="Description"
                style={{ height: '100px' }}
              />
            </Form.Group>
   
            <Form.Group className="mb-4">
              <Form.Label className="label">Status</Form.Label>
              <Form.Select
                className="form-control text-dark"
                aria-label="Default select example"
              >
                <option>Select</option>
                <option value="0">Active</option>
                <option value="1">Deactive</option> 
              </Form.Select>
            </Form.Group>
 
            <Form.Group className="d-flex gap-3">
              <Button variant="primary" type="submit" className="text-white fw-semibold py-2 px-2 px-sm-3">
                <span className="py-sm-1 d-block">
                  <i className="ri-add-line text-white"></i> {' '}
                  <span>Create New Categorie</span>
                </span>
              </Button>
            </Form.Group>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CategoriesTable;