import * as React from "react";
import NextLink from "next/link";
import RoomsListTable from "@/components/Hotel/RoomsListTable";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Rooms List</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Hotel</li>
          <li>Rooms List</li>
        </ul>
      </div>

      <RoomsListTable />
    </>
  );
}
