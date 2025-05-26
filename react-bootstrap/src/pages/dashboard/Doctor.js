import React from "react";
import { Row, Col } from "react-bootstrap";
import IncomeVSExpense from "../../components/Dashboard/Doctor/IncomeVSExpense";
import MyRecentPatients from "../../components/Dashboard/Doctor/MyRecentPatients";
import PatientDistribution from "../../components/Dashboard/Doctor/PatientDistribution";
import PatientRetention from "../../components/Dashboard/Doctor/PatientRetention";
import RecentLabReports from "../../components/Dashboard/Doctor/RecentLabReports";
import Stats from "../../components/Dashboard/Doctor/Stats";
import TodaysSchedule from "../../components/Dashboard/Doctor/TodaysSchedule";
import UpgradePlan from "../../components/Dashboard/Doctor/UpgradePlan";
import Welcome from "../../components/Dashboard/Doctor/Welcome";

const Doctor = () => {
  return (
    <>
      <Welcome />

      <div className="doctor-main-wrapper" style={{ marginTop: "-22px" }}>
        <Stats />

        <Row className="justify-content-center">
          <Col xl={8}>
            <Row>
              <Col md={6}>
                <PatientRetention />
              </Col>

              <Col md={6}>
                <PatientDistribution />
              </Col>
            </Row>

            <UpgradePlan />

            <IncomeVSExpense />
          </Col>

          <Col xl={4}>
            <TodaysSchedule />
          </Col>
        </Row>

        <Row>
          <Col lg={8} xl={8} xxl={9}>
            <MyRecentPatients />
          </Col>

          <Col lg={4} xl={4} xxl={3}>
            <RecentLabReports />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Doctor;
