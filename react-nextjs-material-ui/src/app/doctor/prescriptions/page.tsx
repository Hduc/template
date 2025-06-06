import * as React from "react";
import NextLink from 'next/link';
import PrescriptionsContent from "@/components/Doctor/PrescriptionsContent";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Prescriptions</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Doctor</li>
          <li>Prescriptions</li>
        </ul>
      </div>

      <PrescriptionsContent />
    </>
  );
}
