"use client";

import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Image from "next/image";
import Link from "next/link";

const groupLessonsData = [
  {
    images: [
      {
        img: "/images/user-20.jpg",
      },
      {
        img: "/images/user-21.jpg",
      },
      {
        img: "/images/user-6.jpg",
      },
    ],
    name: "Digital Marketing",
    date: "15 March 2024",

    link: "#",
  },
  {
    images: [
      {
        img: "/images/user-22.jpg",
      },
      {
        img: "/images/user-23.jpg",
      },
      {
        img: "/images/user-24.jpg",
      },
    ],
    name: "Web Development",
    date: "10 March 2024",
    link: "#",
  },
  {
    images: [
      {
        img: "/images/user-25.jpg",
      },
      {
        img: "/images/user-26.jpg",
      },
      {
        img: "/images/user-27.jpg",
      },
    ],
    name: "UX/UI Design",
    date: "05 March 2024",
    link: "#",
  },
  {
    images: [
      {
        img: "/images/user-28.jpg",
      },
      {
        img: "/images/user-29.jpg",
      },
      {
        img: "/images/user-30.jpg",
      },
    ],
    name: "Content Writer",
    date: "02 March 2024",
    link: "#",
  },
  {
    images: [
      {
        img: "/images/user-28.jpg",
      },
      {
        img: "/images/user-29.jpg",
      },
      {
        img: "/images/user-30.jpg",
      },
    ],
    name: "Content Writer",
    date: "02 March 2024",
    link: "#",
  },
  {
    images: [
      {
        img: "/images/user-25.jpg",
      },
      {
        img: "/images/user-26.jpg",
      },
      {
        img: "/images/user-27.jpg",
      },
    ],
    name: "UX/UI Design",
    date: "05 March 2024",
    link: "#",
  },
];

const GroupLessons = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-0">
          <div className="p-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
              <h3 className="mb-0">Group Lessons</h3>

              <Dropdown className="action-opt">
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-basic"
                  className="bg-transparent p-0"
                >
                  <MaterialSymbol icon="more_horiz" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="bg-white border box-shadow">
                  <Dropdown.Item href="#">
                    <MaterialSymbol icon="schedule" />
                    Today
                  </Dropdown.Item>

                  <Dropdown.Item href="#">
                    <MaterialSymbol icon="pie_chart" />
                    Last 7 Days
                  </Dropdown.Item>

                  <Dropdown.Item href="#">
                    <MaterialSymbol icon="refresh" />
                    Last Month
                  </Dropdown.Item>

                  <Dropdown.Item href="#">
                    <MaterialSymbol icon="calendar_today" />
                    Last 1 Year
                  </Dropdown.Item>

                  <Dropdown.Item href="#">
                    <MaterialSymbol icon="bar_chart" />
                    All Time
                  </Dropdown.Item>

                  <Dropdown.Item href="#">
                    <MaterialSymbol icon="visibility" />
                    View
                  </Dropdown.Item>

                  <Dropdown.Item href="#">
                    <MaterialSymbol icon="delete" />
                    Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div className="default-table-area style-two top-instructors">
            <div className="table-responsive">
              <Table className="align-middle border-0">
                <tbody>
                  {groupLessonsData &&
                    groupLessonsData.slice(0, 5).map((value, i) => (
                      <tr key={i} className="gl-tr">
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <div className="d-flex">
                                {value.images.slice(0, 5).map((value, i) => (
                                  <Image
                                    key={i}
                                    src={value.img}
                                    className="wh-44 rounded-circle border border-2 border-color-white minus-l-20"
                                    alt="user"
                                    width={44}
                                    height={44}
                                  />
                                ))}
                              </div>
                            </div>

                            <div className="flex-grow-1 ms-2 position-relative top-2">
                              <h6 className="mb-0 fs-14 fw-medium">
                                {value.name}
                              </h6>
                              <span className="fs-12 text-body">
                                {value.date}
                              </span>
                            </div>
                          </div>
                        </td>

                        <td className="text-end">
                          <Link
                            href={value.link}
                            className="wh-35 d-inline-block border text-center lh-35 rounded-circle text-decoration-none hover-bg"
                          >
                            <i className="ri-arrow-right-up-line fs-18"></i>
                          </Link>
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

export default GroupLessons;