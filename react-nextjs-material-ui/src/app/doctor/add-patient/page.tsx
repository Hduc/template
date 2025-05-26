import * as React from "react";
import NextLink from 'next/link';
import AddPatientForm from "@/components/Doctor/AddPatientForm";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Add Patient</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Doctor</li>
          <li>Add Patient</li>
        </ul>
      </div>

      <AddPatientForm />
    </>
  );
}
