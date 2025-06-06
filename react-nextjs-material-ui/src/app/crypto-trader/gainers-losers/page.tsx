import * as React from "react";
import NextLink from 'next/link';  
import GainersLosersTable from "@/components/CryptoTrader/GainersLosersTable";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Gainers & Losers</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Crypto Trader</li>
          <li>Gainers & Losers</li>
        </ul>
      </div>

      <GainersLosersTable />
    </>
  );
}
