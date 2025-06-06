"use client";

import React, { useState } from "react";
import { Card, Form, Table, Button } from "react-bootstrap";

const toDoListData = [
  {
    id: "#850",
    taskTitle: "Network Infrastructure",
    assignedTo: "Oliver Clark",
    dueDate: "30 Apr 2024",
    priority: "High",
    status: "finished",
  },
  {
    id: "#851",
    taskTitle: "Cloud Migration",
    assignedTo: "Ethan Baker",
    dueDate: "25 Apr 2024",
    priority: "Low",
    status: "pending",
  },
  {
    id: "#852",
    taskTitle: "Website Revamp",
    assignedTo: "Sophia Carter",
    dueDate: "20 Apr 2024",
    priority: "Medium",
    status: "inProgress",
  },
  {
    id: "#853",
    taskTitle: "Mobile Application",
    assignedTo: "Ava Cooper",
    dueDate: "15 Apr 2024",
    priority: "High",
    status: "finished",
  },
  {
    id: "#854",
    taskTitle: "System Deployment",
    assignedTo: "Isabella Evans",
    dueDate: "10 Apr 2024",
    priority: "Low",
    status: "cancelled",
  },
  {
    id: "#855",
    taskTitle: "Website Revamp",
    assignedTo: "Sophia Carter",
    dueDate: "20 Apr 2024",
    priority: "Medium",
    status: "inProgress",
  },
  {
    id: "#856",
    taskTitle: "Network Infrastructure",
    assignedTo: "Oliver Clark",
    dueDate: "30 Apr 2024",
    priority: "High",
    status: "finished",
  },
  {
    id: "#857",
    taskTitle: "Cloud Migration",
    assignedTo: "Ethan Baker",
    dueDate: "25 Apr 2024",
    priority: "Low",
    status: "pending",
  },
  {
    id: "#858",
    taskTitle: "Mobile Application",
    assignedTo: "Ava Cooper",
    dueDate: "15 Apr 2024",
    priority: "High",
    status: "finished",
  },
  {
    id: "#859",
    taskTitle: "System Deployment",
    assignedTo: "Isabella Evans",
    dueDate: "10 Apr 2024",
    priority: "Low",
    status: "cancelled",
  },
];

const ToDoList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Handle search change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page when search term changes
  };

  // Filter tasks based on search term
  const filteredToDoList = toDoListData.filter((task) => {
    return (
      task.taskTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.assignedTo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.dueDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.priority.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTasks = filteredToDoList.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredToDoList.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Modal
  const [isShowModal, setShowModal] = useState("false");
  const handleToggleShowModal = () => {
    setShowModal(!isShowModal);
  };

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-0">
          <div className="p-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
              <h3 className="mb-0">To Do List</h3>

              <div className="d-flex align-items-center gap-2">
                <Form className="position-relative table-src-form me-0">
                  <Form.Control
                    type="text"
                    placeholder="Search here"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />

                  <span className="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y">
                    search
                  </span>
                </Form>

                <div className="text-end">
                  <button
                    className="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
                    onClick={handleToggleShowModal}
                  >
                    <span className="py-sm-1 d-block">
                      <i className="ri-add-line"></i>
                      <span>Add New Task</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="default-table-area style-two to-do-list padding-style">
            <div className="table-responsive">
              <Table className="align-middle">
                <thead>
                  <tr>
                    <th scope="col">
                      <Form>
                        <Form.Check
                          type="checkbox"
                          id="default-checkbox"
                          label="ID"
                        />
                      </Form>
                    </th>
                    <th scope="col">Task Title</th>
                    <th scope="col">Assigned To</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {currentTasks.map((task, i) => (
                    <tr key={i}>
                      <td className="text-body">
                        <Form>
                          <Form.Check
                            type="checkbox"
                            id={task.id}
                            label={task.id}
                          />
                        </Form>
                      </td>

                      <td className="text-body">{task.taskTitle}</td>

                      <td>{task.assignedTo}</td>

                      <td className="text-body">{task.dueDate}</td>

                      <td className="text-body">{task.priority}</td>

                      <td>
                        <span
                          className={`badge bg-opacity-10 p-2 fs-12 fw-medium text-capitalize ${task.status}`}
                        >
                          {task.status}
                        </span>
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

              <div className="p-4">
                <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap">
                  <span className="fs-12 fw-medium">
                    Showing {indexOfFirstItem + 1} to{" "}
                    {Math.min(indexOfLastItem, filteredToDoList.length)} of{" "}
                    {filteredToDoList.length} Results
                  </span>

                  <nav aria-label="Page navigation example">
                    <ul className="pagination mb-0 justify-content-center">
                      <li className="page-item">
                        <button
                          className="page-link icon"
                          onClick={() =>
                            setCurrentPage(Math.max(1, currentPage - 1))
                          }
                        >
                          <span className="material-symbols-outlined">
                            keyboard_arrow_left
                          </span>
                        </button>
                      </li>
                      {[...Array(totalPages)].map((_, idx) => (
                        <li key={idx} className="page-item">
                          <button
                            className={`page-link ${
                              currentPage === idx + 1 ? "active" : ""
                            }`}
                            onClick={() => handlePageChange(idx + 1)}
                          >
                            {idx + 1}
                          </button>
                        </li>
                      ))}
                      <li className="page-item">
                        <button
                          className="page-link icon"
                          onClick={() =>
                            setCurrentPage(
                              Math.min(totalPages, currentPage + 1)
                            )
                          }
                        >
                          <span className="material-symbols-outlined">
                            keyboard_arrow_right
                          </span>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Modal */}
      <div className={`custom-modal right ${isShowModal ? "" : "show"}`}>
        <div className="custom-modal-content position-relative z-3">
          <div className="border-bottom py-3 px-4 d-flex align-items-center justify-content-between">
            <h3 className="fs-18 mb-0">Create Task</h3>

            <div className="close-link" onClick={handleToggleShowModal}>
              <span className="material-symbols-outlined">close</span>
            </div>
          </div>

          <div className="p-4">
            <Form>
              <Form.Group className="mb-4">
                <Form.Label className="label">Task ID</Form.Label>
                <Form.Control
                  type="text"
                  className="text-dark"
                  placeholder="Task ID"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Task Title</Form.Label>
                <Form.Control
                  type="text"
                  className="text-dark"
                  placeholder="Task Title"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Assigned To</Form.Label>
                <Form.Control
                  type="text"
                  className="text-dark"
                  placeholder="Assigned To"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Due Date</Form.Label>
                <Form.Control type="date" className="text-dark" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Priority</Form.Label>
                <Form.Select
                  className="form-control text-dark"
                  aria-label="Default select example"
                >
                  <option>Select</option>
                  <option value="0">High</option>
                  <option value="1">Low</option>
                  <option value="2">Medium</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Status</Form.Label>
                <Form.Select
                  className="form-control text-dark"
                  aria-label="Default select example"
                >
                  <option>Select</option>
                  <option value="0">Pending</option>
                  <option value="1">In Progress</option>
                  <option value="2">Cancelled</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="label">Action</Form.Label>
                <Form.Select
                  className="form-control text-dark"
                  aria-label="Default select example"
                >
                  <option>Select</option>
                  <option value="0">Yes</option>
                  <option value="1">No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="d-flex gap-3">
                <Button
                  variant="primary"
                  type="submit"
                  className="text-white fw-semibold py-2 px-2 px-sm-3"
                >
                  <span className="py-sm-1 d-block">
                    <i className="ri-add-line text-white"></i>{" "}
                    <span>Create Task</span>
                  </span>
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>

        <div className="close-outside" onClick={handleToggleShowModal}></div>
      </div>
    </>
  );
};

export default ToDoList;
