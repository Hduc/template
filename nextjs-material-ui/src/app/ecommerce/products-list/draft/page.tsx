import * as React from "react";
import NextLink from 'next/link';     
import Draft from "@/components/eCommerce/ProductsList/Draft";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Products List</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>eCommerce</li>
          <li>Products List</li>
        </ul>
      </div>

      <Draft />
    </>
  );
}