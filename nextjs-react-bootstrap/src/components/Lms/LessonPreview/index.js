"use client";

import React from 'react';
import Link from 'next/link'; 

const LessonPreview = () => {
  return (
    <>
      <div className="card bg-white border-0 rounded-3 mb-4">
        <div className="card-body p-4">
          <video src="/images/video.mp4" className="w-100 rounded-3 mb-3 mb-md-4" controls></video>

          <h3 className="fs-24">Introduction to Cybersecurity</h3>

          <p className="mb-md-4 mb-3">Node.js for Beginners: Alias animi labque, deserunt distinctio eum excepturi fuga iure labore magni molestias mollitia natus, officia pofro quis sunt temporibus veritatis voluptatem voluptatum.</p>

          <Link href="#" className="btn btn-primary py-2 px-4 fw-medium fs-16">
              <span className="d-inline-block py-1">Next Tutoorial</span>
          </Link>
        </div>
      </div> 
    </>
  )
}

export default LessonPreview;