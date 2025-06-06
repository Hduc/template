import * as React from "react";
import NextLink from "next/link";
import WalletTable from "@/components/CryptoTrader/WalletTable";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Wallet</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Crypto Trader</li>
          <li>Wallet</li>
        </ul>
      </div>

      <WalletTable />
    </>
  );
}
