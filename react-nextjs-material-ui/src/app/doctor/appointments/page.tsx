import * as React from "react";
import NextLink from 'next/link';       
import Appointments from "@/components/Doctor/Appointments";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Appointments</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Doctor</li>
          <li>Appointments</li>
        </ul>
      </div>

      <Appointments />
    </>
  );
}
