import React, { Fragment, Component } from "react";
import { Switch, Route } from "react-router-dom";

import Sidenav from "./Sidenav";
import DasBody from "./DasBody";
import Items from "../items/Items";
import Categories from "../categories/Categories";
const Dashboard = () => {
  return (
    <Fragment>
      <div className="row">
        {/* sidenav */}
        <Sidenav></Sidenav>

        {/* Body */}
        <div className="col s10 p-4">
          {/* body */}
          <Switch>
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
          {/* item reports */}
          {/* <div className="row mt-3">
            <div className="col s12">
              {cat_details.map((item) => (
                <div>
                  <p key={item.id}>
                    {item.cat_name} {JSON.parse(item.files).length}
                  </p>
                  {/* <p>{item.files} </p> */}
          {/* {getCatItems(item.files)} */}
          {/* </div> */}
          {/* ))} */}
          {/* </div> */}
          {/* </div>  */}
        </div>
      </div>
    </Fragment>
  );
};

const getCatItems = (itemList) => {
  let items = JSON.parse(itemList);
  return items.map((i) => <p>{i.name}</p>);
};

Dashboard.propTypes = {};

export default Dashboard;
