"use client";

import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import Dropdown from 'react-bootstrap/Dropdown';
import Image from "next/image";

const Documents = () => {
  return (
    <>
      <Row>
        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
            <Card.Body className="p-4">
              <div className="mb-3 text-center">
                <Image 
                  src="/images/png.png" 
                  alt="png" 
                  width={56}
                  height={56}
                />
                <span className="fs-15 fw-bold text-secondary d-block mt-3">Projects</span>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-3">
                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="visibility" className="text-primary" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="edit" className="text-body" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="delete" className="text-danger" />
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
            <Card.Body className="p-4">
              <div className="mb-3 text-center">
                <Image 
                  src="/images/jpg.png" 
                  alt="jpg" 
                  width={56}
                  height={56}
                />
                <span className="fs-15 fw-bold text-secondary d-block mt-3">Documents</span>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-3">
                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="visibility" className="text-primary" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="edit" className="text-body" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="delete" className="text-danger" />
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
            <Card.Body className="p-4">
              <div className="mb-3 text-center">
                <Image 
                  src="/images/txt.png" 
                  alt="txt" 
                  width={56}
                  height={56}
                />
                <span className="fs-15 fw-bold text-secondary d-block mt-3">Media</span>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-3">
                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="visibility" className="text-primary" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="edit" className="text-body" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="delete" className="text-danger" />
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
            <Card.Body className="p-4">
              <div className="mb-3 text-center">
                <Image 
                  src="/images/pdf.png" 
                  alt="pdf" 
                  width={56}
                  height={56}
                />
                <span className="fs-15 fw-bold text-secondary d-block mt-3">Applications</span>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-3">
                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="visibility" className="text-primary" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="edit" className="text-body" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="delete" className="text-danger" />
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
            <Card.Body className="p-4">
              <div className="mb-3 text-center">
                <Image 
                  src="/images/xl4.png" 
                  alt="xl4" 
                  width={56}
                  height={56}
                />
                <span className="fs-15 fw-bold text-secondary d-block mt-3">ET Template</span>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-3">
                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="visibility" className="text-primary" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="edit" className="text-body" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="delete" className="text-danger" />
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
            <Card.Body className="p-4">
              <div className="mb-3 text-center">
                <Image 
                  src="/images/doc.png" 
                  alt="doc" 
                  width={56}
                  height={56}
                />
                <span className="fs-15 fw-bold text-secondary d-block mt-3">React Template</span>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-3">
                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="visibility" className="text-primary" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="edit" className="text-body" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="delete" className="text-danger" />
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
            <Card.Body className="p-4">
              <div className="mb-3 text-center">
                <Image 
                  src="/images/png.png" 
                  alt="png" 
                  width={56}
                  height={56}
                />
                <span className="fs-15 fw-bold text-secondary d-block mt-3">Material UI</span>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-3">
                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="visibility" className="text-primary" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="edit" className="text-body" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="delete" className="text-danger" />
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
            <Card.Body className="p-4">
              <div className="mb-3 text-center">
                <Image 
                  src="/images/jpg.png" 
                  alt="jpg" 
                  width={56}
                  height={56}
                />
                <span className="fs-15 fw-bold text-secondary d-block mt-3">WP Theme</span>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-3">
                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="visibility" className="text-primary" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="edit" className="text-body" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="delete" className="text-danger" />
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
            <Card.Body className="p-4">
              <div className="mb-3 text-center">
                <Image 
                  src="/images/txt.png" 
                  alt="txt" 
                  width={56}
                  height={56}
                />
                <span className="fs-15 fw-bold text-secondary d-block mt-3">Personal Photos</span>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-3">
                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="visibility" className="text-primary" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="edit" className="text-body" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="delete" className="text-danger" />
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
            <Card.Body className="p-4">
              <div className="mb-3 text-center">
                <Image 
                  src="/images/pdf.png" 
                  alt="pdf" 
                  width={56}
                  height={56}
                />
                <span className="fs-15 fw-bold text-secondary d-block mt-3">Mobile Apps</span>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-3">
                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="visibility" className="text-primary" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="edit" className="text-body" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="delete" className="text-danger" />
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
            <Card.Body className="p-4">
              <div className="mb-3 text-center">
                <Image 
                  src="/images/xl4.png" 
                  alt="xl4" 
                  width={56}
                  height={56}
                />
                <span className="fs-15 fw-bold text-secondary d-block mt-3">Important Files</span>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-3">
                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="visibility" className="text-primary" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="edit" className="text-body" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="delete" className="text-danger" />
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={6} xxl={3}>
          <Card className="bg-white border-0 rounded-3 mb-4">
            <Card.Body className="p-4">
              <div className="mb-3 text-center">
                <Image 
                  src="/images/jpg.png" 
                  alt="jpg" 
                  width={56}
                  height={56}
                />
                <span className="fs-15 fw-bold text-secondary d-block mt-3">Angular Template</span>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-3">
                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="visibility" className="text-primary" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="edit" className="text-body" />
                </button>

                <button className="ps-0 border-0 bg-transparent lh-1 position-relative top-2">
                  <MaterialSymbol size={16} icon="delete" className="text-danger" />
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Documents;