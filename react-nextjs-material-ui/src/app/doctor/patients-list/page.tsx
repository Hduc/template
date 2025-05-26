import * as React from "react";
import NextLink from 'next/link';     
import PatientsList from "@/components/Doctor/PatientsList";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Patients List</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Doctor</li>
          <li>Patients List</li>
        </ul>
      </div>

      <PatientsList />
    </>
  );
}
