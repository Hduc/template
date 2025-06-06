"use client";

import React, { useState } from "react";
import { Card, Form, Table, Button } from "react-bootstrap";
import Image from "next/image";

const agentsData = [
  {
    id: "#850",
    agentName: {
      img: "/images/user-12.jpg",
      name: "Oliver Khan",
    },
    totalTickets: 230,
    openTickets: 20,
    resolvedTickets: 75,
    avgResolutionTime: "2.5 hours",
    satisfactionRate: "80",
  },
  {
    id: "#851",
    agentName: {
      img: "/images/user-13.jpg",
      name: "Ava Cooper",
    },
    totalTickets: 180,
    openTickets: 16,
    resolvedTickets: 35,
    avgResolutionTime: "1.4 hours",
    satisfactionRate: "75",
  },
  {
    id: "#852",
    agentName: {
      img: "/images/user-14.jpg",
      name: "Isabella Evans",
    },
    totalTickets: 150,
    openTickets: 35,
    resolvedTickets: 45,
    avgResolutionTime: "3.2 hours",
    satisfactionRate: "80",
  },
  {
    id: "#853",
    agentName: {
      img: "/images/user-15.jpg",
      name: "Mia Hughes",
    },
    totalTickets: 75,
    openTickets: 86,
    resolvedTickets: 25,
    avgResolutionTime: "4.5 hours",
    satisfactionRate: "100",
  },
  {
    id: "#854",
    agentName: {
      img: "/images/user-16.jpg",
      name: "Noah Mitchell",
    },
    totalTickets: 320,
    openTickets: 90,
    resolvedTickets: 10,
    avgResolutionTime: "3.8 hours",
    satisfactionRate: "80",
  },
  {
    id: "#855",
    agentName: {
      img: "/images/user-17.jpg",
      name: "Sophia Carter",
    },
    totalTickets: 120,
    openTickets: 55,
    resolvedTickets: 20,
    avgResolutionTime: "5.3 hours",
    satisfactionRate: "60",
  },
  {
    id: "#858",
    agentName: {
      img: "/images/user-16.jpg",
      name: "Noah Mitchell",
    },
    totalTickets: 320,
    openTickets: 90,
    resolvedTickets: 10,
    avgResolutionTime: "3.8 hours",
    satisfactionRate: "80",
  },
  {
    id: "#856",
    agentName: {
      img: "/images/user-14.jpg",
      name: "Isabella Evans",
    },
    totalTickets: 150,
    openTickets: 35,
    resolvedTickets: 45,
    avgResolutionTime: "3.2 hours",
    satisfactionRate: "80",
  },
  {
    id: "#857",
    agentName: {
      img: "/images/user-15.jpg",
      name: "Mia Hughes",
    },
    totalTickets: 75,
    openTickets: 86,
    resolvedTickets: 25,
    avgResolutionTime: "4.5 hours",
    satisfactionRate: "100",
  },
  {
    id: "#859",
    agentName: {
      img: "/images/user-17.jpg",
      name: "Sophia Carter",
    },
    totalTickets: 120,
    openTickets: 55,
    resolvedTickets: 20,
    avgResolutionTime: "5.3 hours",
    satisfactionRate: "60",
  },
];

const ITEMS_PER_PAGE = 5; // Change as needed

const PerformanceOfAgents = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(agentsData.length / ITEMS_PER_PAGE);

  const paginatedData = agentsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-0">
          <div className="p-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
              <h3 className="mb-0">Performance of Agents</h3>

              <Form.Select
                className="month-select form-control p-0 h-auto border-0"
                aria-label="Default select example"
              >
                <option defaultValue="0">Select</option>
                <option defaultValue="1">This Day</option>
                <option defaultValue="2">This Week</option>
                <option defaultValue="3">This Month</option>
                <option defaultValue="4">This Year</option>
              </Form.Select>
            </div>
          </div>

          <div className="default-table-area style-two all-projects">
            <div className="table-responsive">
              <Table className="align-middle">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Agent Name</th>
                    <th scope="col">Total Tickets</th>
                    <th scope="col">Open Tickets</th>
                    <th scope="col">Resolved Tickets</th>
                    <th scope="col">Avg. Resolution Time</th>
                    <th scope="col">Satisfaction Rate</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((agent, index) => (
                    <tr key={index}>
                      <td className="text-body">{agent.id}</td>

                      <td>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <Image
                              src={agent.agentName.img}
                              className="wh-34 rounded-circle"
                              alt="user"
                              width={34}
                              height={34}
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 position-relative top-1">
                            <h6 className="mb-0 fs-14 fw-medium">
                              {agent.agentName.name}
                            </h6>
                          </div>
                        </div>
                      </td>

                      <td>{agent.totalTickets}</td>

                      <td className="text-body">{agent.openTickets}</td>

                      <td className="text-body">{agent.resolvedTickets}</td>

                      <td className="text-body">{agent.avgResolutionTime}</td>

                      <td>
                        <div
                          style={{
                            background: `conic-gradient(#605DFF 0% ${agent.satisfactionRate}%, #f1f1f1 ${agent.satisfactionRate}%)`,
                            position: "relative",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              width: "80%",
                              height: "80%",
                              backgroundColor: "white",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "10px",
                              }}
                              className="text-primary"
                            >
                              {agent.satisfactionRate}%
                            </p>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="d-flex align-items-center gap-1">
                          <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                            <span className="material-symbols-outlined fs-16 text-primary">
                              visibility
                            </span>
                          </button>

                          <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                            <span className="material-symbols-outlined fs-16 text-body">
                              edit
                            </span>
                          </button>

                          <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                            <span className="material-symbols-outlined fs-16 text-danger">
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="p-4 pt-lg-4">
              <div className="d-flex justify-content-between align-items-center">
                <span className="fs-12 fw-medium">
                  Showing {paginatedData.length} of {agentsData.length} Results
                </span>

                <nav>
                  <ul className="pagination mb-0">
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <Button
                        className="page-link icon"
                        onClick={() => handlePageChange(currentPage - 1)}
                      >
                        <span className="material-symbols-outlined">
                          keyboard_arrow_left
                        </span>
                      </Button>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li key={index} className="page-item">
                        <Button
                          className={`page-link ${
                            currentPage === index + 1 ? "active" : ""
                          }`}
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </Button>
                      </li>
                    ))}
                    <li
                      className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                    >
                      <Button
                        className="page-link icon"
                        onClick={() => handlePageChange(currentPage + 1)}
                      >
                        <span className="material-symbols-outlined">
                          keyboard_arrow_right
                        </span>
                      </Button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default PerformanceOfAgents;
