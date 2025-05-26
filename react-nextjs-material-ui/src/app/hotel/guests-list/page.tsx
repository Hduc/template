import * as React from "react";
import NextLink from "next/link"; 
import GuestsListTable from "@/components/Hotel/GuestsListTable";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Guests List</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Hotel</li>
          <li>Guests List</li>
        </ul>
      </div>

      <GuestsListTable />
    </>
  );
}
