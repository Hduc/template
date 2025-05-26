import * as React from "react";
import NextLink from 'next/link'; 
import WritePrescriptionForm from "@/components/Doctor/WritePrescriptionForm";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Write a Prescription</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Doctor</li>
          <li>Write a Prescription</li>
        </ul>
      </div>

      <WritePrescriptionForm />
    </>
  );
}
