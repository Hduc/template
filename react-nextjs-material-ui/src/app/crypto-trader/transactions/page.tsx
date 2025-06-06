import * as React from "react";
import NextLink from 'next/link'; 
import TransactionsTable from "@/components/CryptoTrader/TransactionsTable";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Transactions</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Crypto Trader</li>
          <li>Transactions</li>
        </ul>
      </div>

      <TransactionsTable />
    </>
  );
}
