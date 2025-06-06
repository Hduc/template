"use client";

import { Card, Form, Table } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const recentOrdersData = [
  {
    orderID: '#JAN-2345',
    customer: {
      img: '/images/user-1.jpg',
      name: 'Sarah Johnson'
    },
    created: '12 Jun 2024',
    total: '$10,490',
    status: 'shipped',
  },
  {
    orderID: '#JAN-1323',
    customer: {
      img: '/images/user-2.jpg',
      name: 'Michael Smith'
    },
    created: '11 Jun 2024',
    total: '$6,575',
    status: 'confirmed',
  },
  {
    orderID: '#DEC-1234',
    customer: {
      img: '/images/user-3.jpg',
      name: 'Emily Brown'
    },
    created: '10 Jun 2024',
    total: '$12,870',
    status: 'pending'
  },
  {
    orderID: '#DEC-3567',
    customer: {
      img: '/images/user-4.jpg',
      name: 'Jason Lee'
    },
    created: '09 Jun 2024',
    total: '$7,895',
    status: 'shipped',
  },
  {
    orderID: '#DEC-1098',
    customer: {
      img: '/images/user-5.jpg',
      name: 'Ashley Davis'
    },
    created: '08 Jun 2024',
    total: '$4,680',
    status: 'rejected',
  },
];

const RecentOrders = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4">
            <h3 className="mb-0">Recent Orders</h3>
 
            <Form.Select
              className="month-select form-control"
              aria-label="Default select example"
            >
              <option defaultValue="0">Select</option>
              <option defaultValue="1">Today</option>
              <option defaultValue="2">Weekly</option>
              <option defaultValue="3">Monthly</option>
              <option defaultValue="4">Yearly</option>
            </Form.Select>
          </div>

          <div className="default-table-area recent-orders">
            <div className="table-responsive">
              <Table className="table align-middle">
                <thead>
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Created</th>
                    <th scope="col">Total</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrdersData &&
                    recentOrdersData.slice(0, 5).map((value, i) => (
                      <tr key={i}>
                        <td>{value.orderID}</td>
                        <td>
                          <Link
                            href="/my-profile"
                            className="d-flex align-items-center"
                          >
                            <Image
                              src={value.customer.img}
                              className="wh-40 rounded-3"
                              alt="user"
                              width={40}
                              height={40}
                            />
                            <div className="ms-2 ps-1">
                              <h6 className="fw-medium fs-14">
                                {value.customer.name}
                              </h6> 
                            </div>
                          </Link>
                        </td>
                        <td>{value.created}</td>
                        <td>{value.total}</td> 
                        <td>
                          <span 
                            className={`badge p-2 fs-12 fw-normal text-capitalize ${value.status}`}
                          >
                            {value.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div> 
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default RecentOrders;
