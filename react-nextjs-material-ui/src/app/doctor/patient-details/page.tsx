import * as React from "react";
import NextLink from 'next/link';      
import PatientDetailsContent from "@/components/Doctor/PatientDetailsContent";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Patient Details</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Doctor</li>
          <li>Patient Details</li>
        </ul>
      </div>

      <PatientDetailsContent />
    </>
  );
}
