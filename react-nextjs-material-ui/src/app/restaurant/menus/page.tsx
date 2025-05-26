import * as React from "react"; 
import NextLink from 'next/link';  
import MenusTable from "@/components/Restaurant/MenusTable";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Menus</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Restaurant</li>
          <li>Menus</li>
        </ul>
      </div>

      <MenusTable />
    </>
  );
}
