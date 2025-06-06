import React from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../../components/Apps/Email/Sidebar";
import PromotionsEmail from "../../../components/Apps/Email/PromotionsEmail";

const Promotions = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Email</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/dashboard/ecommerce">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </Link>
          </li>
          <li>Apps</li>
          <li>Email</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={4} lg={4} xl={4}>
          <Sidebar />
        </Grid>

        <Grid item xs={12} md={8} lg={8} xl={8}>
          <PromotionsEmail />
        </Grid>
      </Grid>
    </>
  );
};

export default Promotions;
