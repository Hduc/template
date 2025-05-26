import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectsOverview from "../../components/Dashboard/ProjectManagement/ProjectsOverview";
import ProjectsRoadmap from "../../components/Dashboard/ProjectManagement/ProjectsRoadmap";
import ProjectsProgress from "../../components/Dashboard/ProjectManagement/ProjectsProgress";
import MyTasks from "../../components/Dashboard/ProjectManagement/MyTasks";
import AllProjects from "../../components/Dashboard/ProjectManagement/AllProjects";
import ProjectAnalysis from "../../components/Dashboard/ProjectManagement/ProjectAnalysis";
import TeamMembers from "../../components/Dashboard/ProjectManagement/TeamMembers";
import WorkingSchedule from "../../components/Dashboard/ProjectManagement/WorkingSchedule";
import ToDoList from "../../components/Dashboard/ProjectManagement/ToDoList";
import TasksOverview from "../../components/Dashboard/ProjectManagement/TasksOverview";

const ProjectManagement = () => {
  return (
    <>
      <Row>
        <Col xs={12} lg={12} xl={12} xxl={6}>
          <ProjectsOverview />
        </Col>

        <Col xs={12} lg={12} xl={12} xxl={6}>
          <ProjectsRoadmap />
        </Col>
      </Row>

      <Row>
        <Col xs={12} lg={6} xl={6} xxl={7}>
          <ProjectsProgress />
        </Col>

        <Col xs={12} lg={6} xl={6} xxl={5}>
          <MyTasks />
        </Col>
      </Row>

      <AllProjects />
 
      <Row className="justify-content-center">
        <Col xs={12} lg={12} xl={6} xxl={4}>
          <ProjectAnalysis />
        </Col>

        <Col xs={12} lg={12} xl={6} xxl={4}>
          <TeamMembers />
        </Col>

        <Col xs={12} lg={12} xl={6} xxl={4}>
          <WorkingSchedule />
        </Col>
      </Row>
 
      <Row>
        <Col xs={12} lg={8} xl={12} xxl={8}>
          <ToDoList />
        </Col>

        <Col xs={12} lg={4} xl={12} xxl={4}>
          <TasksOverview />
        </Col>
      </Row>
    </>
  );
};

export default ProjectManagement;
