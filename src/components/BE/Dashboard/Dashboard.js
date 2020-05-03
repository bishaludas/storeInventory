import React, { Fragment, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import M from "materialize-css/dist/js/materialize.min.js";
import Sidenav from "./Sidenav";
import DasBody from "./DasBody";
import Items from "../items/Items";
import Categories from "../categories/Categories";

// Modals
import AddCatModal from "../categories/AddCatModal";
import DeleteCatModal from "../categories/DeleteCatModal";
import EditCatModal from "../categories/EditCatModal";
import { softLogoutUser } from "../../../actions/AuthActions";
import { clearDashboardError } from "../../../actions/DashboardAction";

const Dashboard = ({
  dashboard: { error },
  softLogoutUser,
  clearDashboardError,
}) => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  if (error === "Unauthorized.") {
    softLogoutUser();
    clearDashboardError();
    // clear error
  }
  return (
    <Fragment>
      <div className="row">
        {/* sidenav */}
        <Sidenav></Sidenav>

        {/* Import modals */}
        <AddCatModal></AddCatModal>
        <DeleteCatModal></DeleteCatModal>
        <EditCatModal></EditCatModal>

        {/* Body */}
        <div className="col s10 card dashbord-content">
          <div className="card-content p-3">
            {/* body */}
            <Switch>
              <Route exact path="/be-login">
                <Redirect to="/dashboard" />
              </Route>

              <Route exact path="/dashboard">
                <DasBody></DasBody>
              </Route>

              <Route exact path="/be-categories">
                <Categories></Categories>
              </Route>

              <Route exact path="/be-items">
                <Items></Items>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});
export default connect(mapStateToProps, {
  softLogoutUser,
  clearDashboardError,
})(Dashboard);
