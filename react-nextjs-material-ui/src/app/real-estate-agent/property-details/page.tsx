import * as React from "react";
import NextLink from "next/link";   
import PropertyDetailsContent from "@/components/RealEstateAgent/PropertyDetailsContent";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Property Details</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Real Estate Agent</li>
          <li>Property Details</li>
        </ul>
      </div>

      <PropertyDetailsContent />
    </>
  );
}
