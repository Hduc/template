import * as React from "react";
import NextLink from "next/link";  
import PropertiesTable from "@/components/RealEstateAgent/PropertiesTable";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Properties</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Real Estate Agent</li>
          <li>Properties</li>
        </ul>
      </div>

      <PropertiesTable />
    </>
  );
}
