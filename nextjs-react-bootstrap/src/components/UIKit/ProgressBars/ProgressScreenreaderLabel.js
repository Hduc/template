"use client";

import React from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressScreenreaderLabel() {
  const now = 60;

  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <h4 className="fs-18 mb-4">Progress Screenreader Label</h4>
          
          <ProgressBar now={now} label={`${now}%`} visuallyHidden />
        </Card.Body>
      </Card>
    </>
  )
}

export default ProgressScreenreaderLabel;