import * as React from "react"; 
import NextLink from 'next/link';   
import DishDetailsContent from "@/components/Restaurant/DishDetailsContent";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Dish Details</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Restaurant</li>
          <li>Menus</li>
          <li>Dish Details</li>
        </ul>
      </div>

      <DishDetailsContent />
    </>
  );
}
