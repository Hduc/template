import * as React from "react";
import NextLink from "next/link"; 
import RoomDetailsContent from "@/components/Hotel/RoomDetailsContent";
import Reviews from "@/components/Hotel/Reviews";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Room Details</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Hotel</li>
          <li>Room Details</li>
        </ul>
      </div>

      <RoomDetailsContent />

      <Reviews />
    </>
  );
}
