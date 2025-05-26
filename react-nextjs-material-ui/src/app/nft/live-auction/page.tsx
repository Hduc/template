import * as React from "react"; 
import Grid from "@mui/material/Grid";
import DownloadApp from "@/components/Dashboard/NFT/DownloadApp";
import HistoryOfBids from "@/components/Dashboard/NFT/HistoryOfBids";
import LiveAuction from "@/components/NFT/LiveAuction";

export default function Page() {
  return (
    <>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 9 }}>
          <LiveAuction />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 3 }}>
          <Grid
            container 
            spacing={'25px'}
            justifyContent="center"
          >
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 12 }}>
              <DownloadApp />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 12 }}>
              <HistoryOfBids />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
