"use client";

import React from "react"; 

const CourseOverview = () => {
  return (
    <>
      <div className="courses-overview-lms">
        <h3>Course Overview</h3>
        <p>
          Master the skills to become a professional full-stack web developer
          from scratch. This hands-on course covers both front-end and back-end
          development using the most in-demand tools and technologies in the
          industry. Whether you’re starting your career or looking to upgrade
          your skill set, this course will guide you step by step through
          real-world projects and practical applications.
        </p>

        <h3>Course Features</h3>
        <ul className="p-0 m-0 list-unstyled">
          <li>45 in-depth lessons with hands-on coding</li>
          <li>
            Real-world projects: blog, e-commerce store, and portfolio site
          </li>
          <li>Code-along exercises and quizzes</li>
          <li>Lifetime access and updates</li>
          <li>Downloadable resources and source code</li>
          <li>Certificate of completion</li>
          <li>Community Q&A and support</li>
        </ul>

        <h3>Who Should Enroll</h3>
        <ul className="p-0 m-0 list-unstyled">
          <li>Beginners with no prior coding experience</li>
          <li>Designers or marketers looking to build web apps</li>
          <li>Students preparing for software development careers</li>
          <li>
            Freelancers and entrepreneurs who want to create websites or SaaS
            products
          </li>
        </ul>
      </div>
    </>
  );
};

export default CourseOverview;
